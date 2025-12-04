// routes/web.js
const express = require('express');
const router = express.Router();
const Link = require('../models/link');
const { customAlphabet } = require('nanoid');
const validUrl = require('valid-url');

const CODE_REGEX = /^[A-Za-z0-9]{6,8}$/;
const nano = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 7);

function normalizeUrl(u) {
  if (!/^https?:\/\//i.test(u)) return 'https://' + u;
  return u;
}

// Dashboard GET /
router.get('/', async (req, res) => {
  try {
    const links = await Link.find({}).sort({ createdAt: -1 }).lean();
    return res.render('home', { urls: links, created: null, host: req.get('host') });
  } catch (err) {
    console.error('/', err);
    return res.status(500).send('Server error');
  }
});

// Add link via web form (POST /create) -> redirect to / (we could also redirect to /code/:code)
router.post('/create', async (req, res) => {
  try {
    const { target, code } = req.body;
    if (!target) {
      return res.status(400).render('home', { urls: [], created: null, error: 'Target URL required', host: req.get('host') });
    }
    const normalized = normalizeUrl(target);
    if (!validUrl.isUri(normalized)) {
      return res.status(400).render('home', { urls: [], created: null, error: 'Invalid URL', host: req.get('host') });
    }

    let finalCode = code && code.trim() ? code.trim() : null;
    if (finalCode) {
      if (!CODE_REGEX.test(finalCode)) {
        return res.status(400).render('home', { urls: [], created: null, error: 'Code must be 6-8 alphanumeric characters', host: req.get('host') });
      }
      const exists = await Link.findOne({ code: finalCode });
      if (exists) {
        return res.status(409).render('home', { urls: [], created: null, error: 'Code already exists', host: req.get('host') });
      }
    } else {
      let tries = 0;
      do {
        finalCode = nano();
        const coll = await Link.findOne({ code: finalCode });
        if (!coll) break;
        tries++;
      } while (tries < 5);

      const collCheck = await Link.findOne({ code: finalCode });
      if (collCheck) return res.status(500).render('home', { urls: [], created: null, error: 'Could not generate code', host: req.get('host') });
    }

    const doc = new Link({ code: finalCode, target: normalized });
    await doc.save();

    // redirect to stats page for new code
    return res.redirect(`/code/${finalCode}`);
  } catch (err) {
    console.error('POST /create error', err);
    return res.status(500).send('Server error');
  }
});

// Delete via web form
router.post('/delete', async (req, res) => {
  try {
    const { code } = req.body;
    if (!CODE_REGEX.test(code)) return res.redirect('/');
    await Link.findOneAndDelete({ code });
    return res.redirect('/');
  } catch (err) {
    console.error('POST /delete', err);
    return res.status(500).send('Server error');
  }
});

// Stats page /code/:code
router.get('/code/:code', async (req, res) => {
  try {
    const code = req.params.code;
    if (!CODE_REGEX.test(code)) return res.status(404).send('Not found');

    const doc = await Link.findOne({ code }).lean();
    if (!doc) return res.status(404).send('Not found');

    return res.render('stats', { link: doc, host: req.get('host') });
  } catch (err) {
    console.error('/code/:code error', err);
    return res.status(500).send('Server error');
  }
});

module.exports = router;

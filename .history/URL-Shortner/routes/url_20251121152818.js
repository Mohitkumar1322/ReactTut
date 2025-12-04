// routes/url.js
const express = require('express');
const router = express.Router();
const { nanoid } = require('nanoid'); // npm i nanoid
const URL = require('../models/url');

// POST /url  -> create short URL and redirect to /test
router.post('/', async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).send('Please provide a URL');
    }

    const shortId = nanoid(7);
    const doc = new URL({
      shortId,
      redirectURL: url,
      visitHistory: []
    });

    await doc.save();

    // Redirect to /test and include the created shortId so /test can show it
    return res.redirect(`/test?created=${encodeURIComponent(shortId)}`);
  } catch (err) {
    console.error('Error creating short URL:', err);
    return res.status(500).send('Server error');
  }
});
// POST /url/delete -> delete by shortId (called from the form in the table)
router.post('/delete', async (req, res) => {
  try {
    const { shortId } = req.body;
    if (!shortId) {
      return res.status(400).send('Missing shortId');
    }

    const deleted = await URL.findOneAndDelete({ shortId });
    if (!deleted) {
      // optionally: flash a message instead of sending text
      console.warn(`Delete attempted but not found: ${shortId}`);
      return res.redirect('/test');
    }

    return res.redirect('/test');
  } catch (err) {
    console.error('Error deleting short URL:', err);
    return res.status(500).send('Server error');
  }
});

module.exports = router;

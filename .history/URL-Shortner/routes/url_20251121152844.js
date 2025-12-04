// routes/url.js
const express = require('express');
const router = express.Router();
const { nanoid } = require('nanoid'); // npm i nanoid
const URL = require('../models/url');

// Create short URL -> redirect to /test?created=<id>
router.post('/', async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(400).send('Please provide a URL');

    const shortId = nanoid(7);
    const doc = new URL({
      shortId,
      redirectURL: url,
      visitHistory: []
    });

    await doc.save();

    return res.redirect(`/test?created=${encodeURIComponent(shortId)}`);
  } catch (err) {
    console.error('Error creating short URL:', err);
    return res.status(500).send('Server error');
  }
});

// Delete a short URL (POST) -> secure-ish (form)
router.post('/delete', async (req, res) => {
  try {
    const { shortId } = req.body;
    if (!shortId) return res.status(400).send('Missing shortId');

    const deleted = await URL.findOneAndDelete({ shortId });
    if (!deleted) {
      console.warn(`Delete attempted but not found: ${shortId}`);
    }

    return res.redirect('/test');
  } catch (err) {
    console.error('Error deleting short URL:', err);
    return res.status(500).send('Server error');
  }
});

module.exports = router;

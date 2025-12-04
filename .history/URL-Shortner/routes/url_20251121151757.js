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

module.exports = router;

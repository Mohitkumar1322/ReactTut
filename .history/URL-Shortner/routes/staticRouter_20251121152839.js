// routes/staticRouter.js
const express = require('express');
const router = express.Router();
const URL = require('../models/url');

// GET / -> render home (form + table)
router.get('/', async (req, res) => {
  try {
    const allUrls = await URL.find({}).lean();
    return res.render('home', {
      urls: allUrls,
      created: null,
      host: req.get('host') || 'localhost:8001'
    });
  } catch (err) {
    console.error('Error rendering /:', err);
    return res.status(500).send('Server error');
  }
});

module.exports = router;

// index.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const { connectToMongoDB } = require('./connect');

const apiLinks = require('./routes/apiLinks');
const web = require('./routes/web');
const Link = require('./models/link');

const app = express();
const PORT = process.env.PORT || 8001;

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.warn('MONGO_URI not set — check .env or env variables');
}

connectToMongoDB(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Mongo connection error:', err));

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// API routes (for autograder)
app.use('/api/links', apiLinks);

// Web pages
app.use('/', web);

// Healthcheck
app.get('/healthz', (req, res) => {
  res.status(200).json({ ok: true, version: '1.0' });
});

// Redirect route: note this must be AFTER /api and /code routes so it doesn't clash
app.get('/:code', async (req, res) => {
  try {
    const code = req.params.code;
    // Only match codes that satisfy the regex (safety)
    if (!/^[A-Za-z0-9]{6,8}$/.test(code)) {
      return res.status(404).send('Not found');
    }

    // update clicks & lastClicked atomically
    const entry = await Link.findOneAndUpdate(
      { code },
      { $inc: { clicks: 1 }, $set: { lastClicked: new Date() } },
      { new: true }
    );

    if (!entry) return res.status(404).send('Not found');

    return res.redirect(302, entry.target);
  } catch (err) {
    console.error('Redirect error:', err);
    return res.status(500).send('Server error');
  }
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

// index.js
const express = require('express');
const path = require('path');

const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url'); // POST /url and POST /url/delete
const staticRouter = require('./routes/staticRouter'); // GET /
const URL = require('./models/url');

const app = express();
const PORT = process.env.PORT || 8001;

// Use env in prod; hard-coded here for dev (move to .env)
const MONGO_URI = 'mongodb+srv://mohitkum1352:15364164@urlshortner.xh4pdly.mongodb.net/';

connectToMongoDB(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Mongo connection error:', err));

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Root routes (home page)
app.use('/', staticRouter);

// POST /url and POST /url/delete
app.use('/url', urlRoute);

// /test shows list and created id (if provided)
app.get('/test', async (req, res) => {
  try {
    const allUrls = await URL.find({}).lean();
    const created = req.query.created || null;
    const host = req.get('host') || `localhost:${PORT}`;
    return res.render('home', { urls: allUrls, created, host });
  } catch (err) {
    console.error('Error fetching URLs for /test:', err);
    return res.status(500).send('Server error');
  }
});

// Redirect short url with safety & null check
app.get('/url/:shortId', async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );

    if (!entry) {
      // Short id not found — show friendly 404
      return res.status(404).send('Short URL not found');
    }

    return res.redirect(entry.redirectURL);
  } catch (err) {
    console.error('Redirect error:', err);
    return res.status(500).send('Server error');
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

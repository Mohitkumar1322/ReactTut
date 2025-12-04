// index.js
const express = require('express');
const path = require('path');

const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url'); // handles POST /url
const staticRouter = require('./routes/staticRouter'); // handles GET /
const URL = require('./models/url');

const app = express();
const PORT = process.env.PORT || 8001;

// replace with your connection string (move to env in prod)
const MONGO_URI = 'mongodb+srv://mohitkum1352:15364164@urlshortner.xh4pdly.mongodb.net/';

connectToMongoDB(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Mongo connection error:', err));

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serve root pages (GET /)
app.use('/', staticRouter);

// POST /url  (create) handled by this router
app.use('/url', urlRoute);

// test page: shows created id if query param present and list of all URLs
app.get('/test', async (req, res) => {
  try {
    const allUrls = await URL.find({}).lean();
    const created = req.query.created || null;
    const host = req.get('host') || `localhost:${PORT}`;

    return res.render('home', {
      urls: allUrls,
      created,
      host
    });
  } catch (err) {
    console.error('Error fetching URLs for /test:', err);
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
// redirect short url
app.get('/url/:shortId', async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );

    if (!entry) {
      return res.status(404).send('Short URL not found');
    }

    return res.redirect(entry.redirectURL);
  } catch (err) {
    console.error('Redirect error:', err);
    return res.status(500).send('Server error');
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

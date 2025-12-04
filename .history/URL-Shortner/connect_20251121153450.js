// connect.js
const mongoose = require('mongoose');

async function connectToMongoDB(uri) {
  if (!uri) {
    throw new Error('MONGO_URI required');
  }
  const opts = { useNewUrlParser: true, useUnifiedTopology: true };
  await mongoose.connect(uri, opts);
  return mongoose;
}

module.exports = { connectToMongoDB };

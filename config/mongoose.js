const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];
const mongoose = require('mongoose');

module.exports = function () {
  mongoose.Promise = global.Promise;
  mongoose.connect(config.db, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.once('open', function () {
    console.log('Connection extablised with MongoDB');
  });
  return db;
};

var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];
var mongoose = require('mongoose');

module.exports = function () {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.db, { useNewUrlParser: true });
    var db = mongoose.connection;
    db.on('error', function (err) {
        console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
    });
    db.once('open', function () {
        console.log('Connection extablised with MongoDB')
    });
    return db;
};

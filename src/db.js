const mongoose = require('mongoose');

if (process.env.NODE_ENV === 'test') {
  mongoose.connect('mongodb://localhost/api-test');
} else {
  mongoose.connect('mongodb://localhost/api');
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

module.exports.db = db;

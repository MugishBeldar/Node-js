const config = require('../config');
const mongoose = require('mongoose');

mongoose.connect(config.MONGODB_URL);
const db = mongoose.connection;
db.on('error', err => console.log("Error",err))
db.once('open',()=>console.info('Connected to the database!!'));

const User = require('./use-modal');

module.exports = {
  User
};

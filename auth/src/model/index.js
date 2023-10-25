require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', err => console.log(err))
db.once('open',()=>console.log('Connected to the database!!'));



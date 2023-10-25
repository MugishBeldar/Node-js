const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please fill your name']
  },
  email: {
    type: String,
    required: [true, 'Please fill your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  address: {
    type: String, // Changed to 'String' from 'string'
    required: [true, 'Please fill your address'],
  },
  password: {
    type: String, // Changed to 'String' from 'string'
    required: [true, 'Please fill your password'],
    minlength: 6,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please fill your password confirm"],
    validate: {
      validator: function (val) {
        // "this" works only on create and save
        return val === this.password;
      },
      message: "Your password and confirmation password are not the same",
    },
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

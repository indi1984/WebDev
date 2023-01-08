// Declerations
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username cannot be blank!'],
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
  },
});

// Auth Middleware
userSchema.statics.findAndValidate = async function(username, password) {
  const foundUser = await this.findOne({username});
  const isValid = await bcrypt.compare(password, foundUser.password);
  return isValid ? foundUser : false;
};

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Exports
module.exports = mongoose.model('User', userSchema);

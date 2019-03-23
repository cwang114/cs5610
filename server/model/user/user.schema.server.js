var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({

  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  // leave the website [] empty
  // fill in other attributes
  // websites:[websiteSchema],
  dateCreated: {type: Date, default: Date.now()}
}, {collection: 'user'});
module.exports = userSchema;

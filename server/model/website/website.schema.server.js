var mongoose = require('mongoose');
var websiteSchema = new mongoose.Schema({
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: String,
  description: String,
  // leave page schema blank
  dateCreated: {type: Date, default: Date.now()}
}, {collection: 'website'});

module.exports = websiteSchema;

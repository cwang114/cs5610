var mongoose = require('mongoose');
var pageSchema = new mongoose.Schema({
  _website: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Website'
  },
  name: String,
  title: String,
  description: String,
  // leave widget schema blank
  dateCreated: {type: Date, default: Date.now()}
}, {collection: 'page'});

module.exports = pageSchema;

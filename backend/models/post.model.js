const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: { type: String, required: true },
  name: { type: String, required: true },
  created: { type: Date, required: true },
  changed: { type: Date, required: true },
  status: { type: String, required: true },
  title: { type: String, required: true, minlength: 10 },
  text: { type: String, required: true, minlength: 20 },
  image: { type: String },
  price: { type: Number},
  phone: { type: String },
  location: { type: String },
});
module.exports = mongoose.model('Post', postSchema);

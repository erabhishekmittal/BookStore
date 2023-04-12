const mongoose = require("mongoose");

// Create Schema
const bookListSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  descriptions: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  language: {
    type: String,
    required: true,
    trim: true,
  },
  publishDated: {
    type: Date,
    default: Date.now,
  },
});

//new collection
const BookList = new mongoose.model("BookList", bookListSchema);

module.exports = BookList;

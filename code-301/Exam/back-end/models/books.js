

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
})

//This book ends up being a constructor/class based on that schema
const Book = mongoose.model('Book', bookSchema);

//we're exporting it here so that we can import it elsewhere
module.exports = Book;

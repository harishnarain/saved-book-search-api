const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookId: { type: String, required: true },
  title: { type: String, required: false },
  authors: { type: Array, required: false },
  synopsis: String,
  description: { type: String, required: false },
  image: { type: String, required: false },
  link: { type: String, required: false },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

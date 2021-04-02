const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    bookid: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Book
 */
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

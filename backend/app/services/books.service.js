const httpStatus = require("http-status");
const { Book } = require("../models");
const ApiError = require("../utils/ApiError");
const booksData = require("./booksData");

// ========================== With data coming from MongoDB ================================================================= //

// const getBooks = async () => {
//   const books = await Book.find();
//   return books;
// };

// const getBookById = async (data) => {
//   const books = await Book.find({
//     bookid: data.id,
//   });
//   return books;
// };

// =============================== Without database ============================================================ //

const getBooks = async () => {
  const books = booksData;
  return books;
};

const getBookById = async (data) => {
  const books = booksData.filter((book) => {
    return book.bookid == data.id ? book : null;
  });
  return books;
};

module.exports = {
  getBooks,
  getBookById,
};

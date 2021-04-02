const httpStatus = require("http-status");

const ApiError = require("../utils/ApiError");

const bookService = require("../services/books.service");

const getBooks = async (req, res, next) => {
  try {
    const result = await bookService.getBooks();
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const getBook = async (req, res, next) => {
  try {
    const book = await bookService.getBookById({ id: req.params.bookId });
    if (!book) {
      throw new ApiError(httpStatus.NOT_FOUND, "Book not found");
    }
    res.send(book);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getBook,
  getBooks,
};

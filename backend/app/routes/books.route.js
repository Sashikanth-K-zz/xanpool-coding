const express = require("express");

const booksController = require("../controllers/books.controller");

const router = express.Router();

router.route("/").get(booksController.getBooks);

router.route("/:bookId").get(booksController.getBook);

module.exports = router;

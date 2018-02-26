var express = require('express');
var Book = require('./../models/book');
var router = express.Router();


/* GET books listing. */
router.get('/', function (req, res, next) {
  Book.find((err, books) => {
    if (err) return res.status(500).send(err)
    return res.status(200).send(books);
  });
});

/* GET books by id. */
router.get('/:bookId', function (req, res, next) {
  Book.findById(req.params.bookId, (err, book) => {
    if (err) return res.status(500).send(err)
    return res.status(200).send(book);
  });
});


/* Add new book. */
router.post('/', function (req, res, next) {
  const newBookObj = new Book(req.body);
  newBookObj.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newBookObj);
  });
});


/* Update book. */
router.put('/:bookId', function (req, res, next) {
  Book.findByIdAndUpdate(req.params.bookId, req.body, { new: true }, (err, book) => {
    if (err) return res.status(500).send(err);
    return res.send(book);
  });
});

/* Delete book by Id. */
router.delete('/:bookId', function (req, res, next) {
  Book.findByIdAndRemove(req.params.bookId, (err, book) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Book successfully deleted",
      id: book._id
    };
    return res.status(200).send(response);
  });
});

module.exports = router;

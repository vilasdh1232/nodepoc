var express = require('express');
var controllers = require('./../controllers/index.ctrl');
var bookCtrl = controllers.bookCtrl;
var passport = require('passport');


var router = express.Router();

/* GET books listing. */
router.get('/', passport.authenticate('jwt', { session: false}), bookCtrl.getAllBooks);

/* GET books by id. */
router.get('/:bookId', bookCtrl.getBookById);

/* Add new book. */
router.post('/', bookCtrl.addNewBook);

/* Update book. */
router.put('/:bookId', bookCtrl.updateBookById);

/* Delete book by Id. */
router.delete('/:bookId', bookCtrl.deleteBookById);

module.exports = router;



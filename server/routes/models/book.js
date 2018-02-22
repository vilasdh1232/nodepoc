var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bookSchema = new Schema({
    fname: String,
    lname: String,
    mobile: Number
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;
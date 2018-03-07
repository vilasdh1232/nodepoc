var bookRoute = require('./book.route');
var employeeRoute = require('./employee.route');
module.exports = function (app) {   

    app.get('/', function (req, res) {
        res.send('Welcome to API!');
    });

    app.use('/book', bookRoute);
    app.use('/employee', employeeRoute);

};
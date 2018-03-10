var bookRoute = require('./book.route');
var employeeRoute = require('./employee.route');
var passport = require('passport');
var cors = require('cors');
var config = require('./../config/config');
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('Welcome to API!');
    });

    app.post('/signin', function (req, res) {
        User.findOne({
            username: req.body.username
        }, function (err, user) {
            if (err) throw err;

            if (!user) {
                res.status(401).send({ errors: [{ code: '', message: 'Authentication failed. User not found.' }] });
            } else {
                // check if password matches
                user.comparePassword(req.body.password, function (err, isMatch) {
                    if (isMatch && !err) {
                        // if user is found and password is right create a token
                        var token = jwt.sign(user, config.secret);
                        // return the information including token as JSON
                        res.json({ success: true, token: 'JWT ' + token });
                    } else {
                        res.status(401).send({ errors: [{ code: '', message: 'Authentication failed. Wrong password.' }] });

                    }
                });
            }
        });
    });

    app.post('/signup', function (req, res) {
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ errors: [{ code: '', message: 'Please pass username and password.' }] });
        } else {
            var newUser = new User({
                username: req.body.username,
                password: req.body.password
            });
            // save the user
            newUser.save(function (err) {
                if (err) {
                    return res.status(400).json({ errors: [{ code: '', message: 'Username already exists.' }] });

                }
                return res.json({ payload: { message: 'Successful created new user.' } });

            });
        }
    });
    app.use('/book', bookRoute);
    app.use('/employee', employeeRoute);

};
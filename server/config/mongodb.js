var mongoose = require('mongoose');
module.exports = function (connectionString) {
    // ------------------------------------------
    //mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00-9iyxz.mongodb.net:27017,cluster0-shard-00-01-9iyxz.mongodb.net:27017,cluster0-shard-00-02-9iyxz.mongodb.net:27017/addressbook?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

    mongoose.connect(connectionString);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
};
const express = require('express');
const app = express();
var config = require('./config/config');

require('./config/mongodb')(config.dbConnection);
require('./config/passport')(app);
require('./routes/index.route')(app);
require('./config/express')(app);


app.listen(config.port, () => console.log('Example app listening on port 3000!'));
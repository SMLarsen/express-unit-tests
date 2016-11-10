var express = require("express");
var app = express();
var index = require('./routes/index');
var hello = require('./routes/welcome');
var parts = require('./routes/parts');
var bodyParser = require('body-parser');
var port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', index);

app.get('/hello', hello);

app.use('/parts', parts);

app.use(express.static('lib/public'));

// Set port to listen to
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log("Listening on port: " + app.get('port'));
});

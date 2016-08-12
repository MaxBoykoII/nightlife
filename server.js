var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = express('express-session');
var oauth = {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    token: process.env.token,
    token_secret: process.env.token_secret,
};
var apiRouter = require('./routes/api/main')(oauth);
var authRouter = require('./routes/auth')();

var app = express();
var db = mongoose.connect(process.env.db || 'mongodb://maxboyko-nightlife-3563982');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

try {
    app.use(session({
        secret: 'dev-secret262'
    }));
}
catch (e) {
    console.log(e);
}

require('./config/passport')(app);

app.use(express.static(__dirname + '/public'));
app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.listen(process.env.port || '8080', process.env.IP || '0.0.0.0', function() {
    console.log('The server is on and is accepting requests...');
});

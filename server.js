var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('cookie-session');


var app = express();
var db = mongoose.connect(process.env.db);

//app.use(cookieParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(session({
    secret: 'dev',
}));

require('./server-side/config/passport')(app);

var oauth = {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    token: process.env.token,
    token_secret: process.env.token_secret,
};
var apiRouter = require('./server-side/routes/api/main')(oauth);
var authRouter = require('./server-side/routes/auth/main')();

app.use(express.static(__dirname + '/public'));
app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.listen(process.env.port || process.env.PORT|| '8080', process.env.IP || '0.0.0.0', function() {
    console.log('The server is on and is accepting requests...');
});

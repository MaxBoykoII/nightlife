var express = require('express');
var app = express();
var oauth = {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    token: process.env.token,
    token_secret: process.env.token_secret,
};
var apiRouter = require('./routes/api/main.js')(oauth);

app.use(express.static(__dirname + '/public'));
app.use('/api', apiRouter);

app.listen(process.env.port || '8080', process.env.IP || '0.0.0.0', function() {
    console.log('The server is on and is accepting requests...');
});

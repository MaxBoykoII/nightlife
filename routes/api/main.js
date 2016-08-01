var Yelp = require('yelp');

var yelp = new Yelp({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    token: process.env.token,
    token_secret: process.env.token_secret,
});

var parameters = {
    term: 'bar',
    location: 'San Francisco, CA',
};

yelp.search(parameters)
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});


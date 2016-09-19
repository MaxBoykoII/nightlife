var express = require('express');
var apiRouter = express.Router();
var Yelp = require('yelp');

var router = function(oauth) {
    var yelp = new Yelp(oauth);
    apiRouter.route('/')
        .get((req, res) => {
            var location = req.query.location;
            var parameters = {
                term: 'bar',
                location: location || 'San Francisco, CA',
            };
            
            yelp.search(parameters)
                .then(function(data) {
                    res.json(data.businesses);
                })
                .catch(function(err) {
                    res.json(err);
                    console.log(err);
                });

        });

    return apiRouter;


};

module.exports = router;

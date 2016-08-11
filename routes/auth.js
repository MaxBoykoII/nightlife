var express = require('express');
var passport = require('passport');
var authRouter = express.Router();

var router = function() {
    authRouter.route('/google')
        .get(passport.authenticate('google', {
            scope: []
        }));
    authRouter.route('/google/callback')
        .get(passport.authenticate('google', {
            successRedirect: '/',
            failure: '/'
        }));

    return authRouter;
};

module.exports = router;
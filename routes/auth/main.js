var express = require('express');
var passport = require('passport');
var authRouter = express.Router();
var userController = require('./user.controller');

var router = function() {
    authRouter.route('/google')
        .get(passport.authenticate('google', {
            scope: ['https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ]
        }));
    authRouter.route('/google/callback')
        .get(passport.authenticate('google', {
            successRedirect: '/',
            failure: '/'
        }));
    authRouter.route('/user')
        .get(userController.get)
        .put(userController.put);

    return authRouter;
};

module.exports = router;
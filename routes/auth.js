var express = require('express');
var passport = require('passport');
var authRouter = express.Router();
var _ = require('lodash');

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
        .get((req, res) => {
            if(req.user){
                res.json(_.assign(req.user, {autheticated: true}));
            }
            else {
                res.json({authenticated: false});
            }
        });

    return authRouter;
};

module.exports = router;
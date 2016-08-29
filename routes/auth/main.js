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
            if (req.user) {
                res.json(_.assign(req.user, {
                    authenticated: true
                }));
            }
            else {
                res.json({
                    authenticated: false
                });
            }
        })
        .put((req, res) => {
            /* Route for adding a bar to a user's visited locations */
            
            if (req.user) {
                console.log(req.body);
                res.json(req.user);
            }
            else {
                res.status(401).send({
                    error: 'Please login!'
                });
            }
        });

    return authRouter;
};

module.exports = router;
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require('../../models/user');

module.exports = function() {

    passport.use(new GoogleStrategy({
            clientID: '233946367657-4daslmopfonpjpkh7quemem729f5a7ba.apps.googleusercontent.com',
            clientSecret: 'E8MCOMI3pRS1OmIhpzyo5f9c',
            callbackURL: 'https://nightlife-maxboyko.c9users.io/auth/google/callback'
        },
        function(req, accessToken, refreshToken, profile, done) {

            var email = profile.emails[0].value;
            var query = {
                'email': email
            };
            console.log(refreshToken.access_token);
            User.findOne(query, (err, user) => {
                if (err) {
                    console.log(err);
                }
                if (user) {
                    done(null, user);
                }
                else {
                    var user = new User;
                    user.email = email;
                    user.displayName = profile.displayName;
                    user.visited = [];
                    user.save();
                    done(null, user);
                }
            });
        }
    ));
};
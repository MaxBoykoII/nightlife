var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function() {

    passport.use(new GoogleStrategy({
            clientID: '233946367657-4daslmopfonpjpkh7quemem729f5a7ba.apps.googleusercontent.com',
            clientSecret: 'E8MCOMI3pRS1OmIhpzyo5f9c',
            callbackURL: 'https://nightlife-maxboyko.c9users.io/auth/google/callback'
        },
        function(req, accessToken, refreshToken, profile, done) {
            console.log(profile, accessToken, refreshToken);
            done(null, profile);
        }
    ));
    
    console.log('got here!');
};
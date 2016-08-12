var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    displayName: String,
    email: String,
    visited: [String]
});

module.exports = mongoose.model('User', UserSchema, 'users');
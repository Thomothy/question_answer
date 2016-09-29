/* Require our Mongoose */
var mongoose = require('mongoose');


/* Define our UserSchema */
var UserSchema = new mongoose.Schema({
	username: String,
	password: String
}, {timestamps: true});

mongoose.model('User', UserSchema);
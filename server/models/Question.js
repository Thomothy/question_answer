/* Require our Mongoose */
var mongoose = require('mongoose');

/* Define our Question model */
var QuestionSchema = new mongoose.Schema({
    question: { type: String, required: true, minlength: 10 },
    description: String,
    _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});

mongoose.model('Question', QuestionSchema);

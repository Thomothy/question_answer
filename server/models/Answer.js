/* Require our Mongoose */
var mongoose = require('mongoose');


/* Define our Answer model */
var AnswerSchema = new mongoose.Schema({
    answer: { type: String, required: true, minlength: 5 },
    description: String,
    like: {type: Number, default: 0},
    _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    _question: {type: mongoose.Schema.Types.ObjectId, ref: 'Topic'}
}, {timestamps: true});

mongoose.model('Answer', AnswerSchema);

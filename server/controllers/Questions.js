/* Require our Mongoose */
var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {
    /* Create a new Question */
    post: function(req,res){
        console.log("/questions, post");
        console.log("POST DATA", req.body);
        var question = new Question(req.body);
        console.log(req.session);
        question._user = req.session.user._id;
        question.save(function(err){
            console.log("question save");
            if (err){
                res.status(500).send("Question did not save");
            }else{
            console.log("question post save success");
                res.sendStatus(200);
            }
        });
    },
    /* Get all Questions */
    getAll: function(req,res){
        Question.find({}).populate('_user').exec(function(err,questions){
            if (err){
                res.status(500).send(err);
            }else{
                res.json(questions);
            }
        });
    },
    /* Get one Question */
    get: function(req,res){
        Question.findOne({_id:req.params.id}).exec(function(err,question){
            if (err){
                res.status(500).send(err);
            }else{
                res.json(question);
            }
        });
    },
    upvote: function(req,res){
        Question.update({_id:req.params.id}, {$inc:{upvote:1}})
            .exec(function(err,question){
            if (err){
                res.status(500).send("Question did not upvote.");
            }else{
                res.sendStatus(200);
            }
        })
    },
    downvote: function(req,res){
        Question.update({_id:req.params.id}, {$inc:{downvote:1}})
            .exec(function(err,question){
            if (err){
                res.status(500).send("Question did not upvote.");
            }else{
                res.sendStatus(200);
            }
        })
    }
}

// /*
// POST /products
// Create a new product that has a default quantity of 50
// GET /products
// Get all products
// DELETE /products/:id
// Delete the product with that id
// PUT /products/buy/:id
// Decrement the quantity of the product with that id by 1
// Do not let it go below zero

// */

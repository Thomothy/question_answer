var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
module.exports = {
    post: function(req,res){
        console.log("/answers, post");
        var product = new Answer(req.body);
        product.save(function(err){
            console.log("product save");
            if (err){
                res.status(500).send("Answer did not save");
            }else{
            console.log("product post save success");
                res.sendStatus(200);
            }
        });
    },  // Create new product
    getAll: function(req,res){
        Answer.find({}).exec(function(err,answers){
            if (err){
                res.status(500).send(err);
            }else{
                res.json(answers);
            }
        });
    },  // Create new product
    get: function(req,res){
        Answer.findOne({_id:req.params.id}).exec(function(err,product){
            if (err){
                res.status(500).send(err);
            }else{
                res.json(product);
            }
        });
    },
    buy: function(req,res){
        Answer.update({_id:req.params.id}, {$inc:{quantity:-1}})
            .exec(function(err,product){
            if (err){
                res.status(500).send("Answer did not update");
            }else{
                res.sendStatus(200);
            }
        })
    },
    delete: function(req,res){
        Answer.remove({_id:req.params.id}).exec(function(err){
            if (err){
                res.status(500).send("Answer did not delete");
            }else{
                res.sendStatus(200);
            }
        })
    }
}

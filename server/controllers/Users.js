/* Require our Mongoose */
var mongoose = require('mongoose');

/* Setup our User controller */
var User = mongoose.model('User');

module.exports = {
		register: function(req,res){
        console.log("POST DATA", req.body);
        if (req.body.password != req.body.pw_confirm){
            res.sendStatus(400);
        }else{
            var user = new User(req.body);
            user.save(function(err,user){
                if (err){
                    res.sendStatus(500);
                }else{
                    req.session.user = user;
                    res.send(user);
                }
            });
        }
   	},

    login:function(req,res){
        User.findOne({username:req.body.username}).exec(function(err,user){
            if(user.password != req.body.password){
                res.sendStatus(400);
            }else{
								console.log('login worked!!')
                req.session.user = user;
                res.send(user);
            }
        })
    },

    logout:function(req,res){
        req.session.destroy(function(err) {
            if (err){
                res.sendStatus(500);
            }else{
								console.log('session destroyed!');
								console.log(req.session);
                res.sendStatus(200);
            }
        })
    }
}

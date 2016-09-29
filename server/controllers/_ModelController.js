// var mongoose = require('mongoose');
// var Product = mongoose.model('Product');
// module.exports = {
//     post: function(req,res){
//         console.log("/products, post");
//         var product = new Product(req.body);
//         product.save(function(err){
//             console.log("product save");
//             if (err){
//                 res.status(500).send("Product did not save");
//             }else{
//             console.log("product post save success");
//                 res.sendStatus(200);
//             }
//         });
//     },  // Create new product
//     getAll: function(req,res){
//         Product.find({}).exec(function(err,products){
//             if (err){
//                 res.status(500).send(err);
//             }else{
//                 res.json(products);
//             }
//         });
//     },  // Create new product
//     get: function(req,res){
//         Product.findOne({_id:req.params.id}).exec(function(err,product){
//             if (err){
//                 res.status(500).send(err);
//             }else{
//                 res.json(product);
//             }
//         });
//     },
//     buy: function(req,res){
//         Product.update({_id:req.params.id}, {$inc:{quantity:-1}})
//             .exec(function(err,product){
//             if (err){
//                 res.status(500).send("Product did not update");
//             }else{
//                 res.sendStatus(200);
//             }               
//         })
//     },
//     delete: function(req,res){
//         Product.remove({_id:req.params.id}).exec(function(err){
//             if (err){
//                 res.status(500).send("Product did not delete");
//             }else{
//                 res.sendStatus(200);
//             }
//         })
//     }
// }
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
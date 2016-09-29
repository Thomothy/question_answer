// app.factory("productFactory", ["$http", function($http){
//     var products = {data:[]}
//     var factory = {};
//     factory.getProducts = function(callback){
//         $http({
//             method:"GET",
//             url:'/products'
//         }).then(function(res){
//             products.data = res.data;
//             callback(products);
//         })
//     }
//     factory.getProduct = function(id,callback){
//         $http({
//             method:"GET",
//             url:'/products/'+id
//         }).then(function(res){
//             products.data = res.data;
//             callback(products);
//         })
//     }
//     factory.buyProduct = function(productInfo, callback){
//         $http({
//             method:"PUT",
//             url:'/products/'+productInfo._id
//         }).then(function(res){
//             callback();
//         })
//     }
//     factory.addProduct = function(productInfo, callback){
//         $http({
//             method:"POST",
//             url:"/products",
//             data: productInfo
//         }).then(function(res){
//             callback();
//         })
//     }
//     factory.deleteProduct = function(productInfo, callback){
//         $http({
//             method:"DELETE",
//             url:'/products/'+productInfo._id
//         }).then(function(res){
//             callback();
//         })
//     }
//     return factory;
// }])

// /* ~~~~~~~~    ~~~~~~~~
//     ~~~~~~      ~~~~~~
//         ~~        ~~
//     //~~//      //~~//
//     //~~//      //~~//
// //////////////////////
// //  ___     ____    //
// //  |  |    |  |    //
// //  ----    ----    //
// //  ____    ____    //
// //  |   |   |   |   //
// //////////////////////
// */
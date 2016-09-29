// app.controller('productsController',['$scope', '$http','productFactory','$location', function($scope, $http,productFactory, $location){
//     function updateHTML(){
//         productFactory.getProducts(function(products){
//             $scope.products = products;
//         })
//     }
//     updateHTML();
//     $scope.addProduct = function(productInfo){
//         productFactory.addProduct(productInfo, function(){
//             updateHTML();
//         });
//     };
//     $scope.deleteProduct = function(productInfo){
//         productFactory.deleteProduct(productInfo, function(){
//             updateHTML();
//         })
//     }
//     $scope.editProduct = function(productInfo){
//         $location.url('editProduct/'+productInfo._id+"/Kelvin!");
//     }
// }])
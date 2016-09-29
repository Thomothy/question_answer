app.controller('ordersController',['$scope', '$http', 'productFactory', function($scope, $http,productFactory){
    function updateHTML(){
        productFactory.getProducts(function(products){
            $scope.products = products;
        })
    }
    updateHTML();
    $scope.buyProduct = function(productInfo){
        productFactory.buyProduct(productInfo, function(){
            updateHTML();
        })
    }
}]);
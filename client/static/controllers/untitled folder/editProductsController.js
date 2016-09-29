app.controller('editProductsController', ["$scope", "$routeParams",'productFactory', function($scope, $routeParams, productFactory){
    productFactory.getProduct($routeParams.id, function(data){
        $scope.product = data.data;
    })

}])
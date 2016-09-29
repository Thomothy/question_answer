app.factory('UserFactory', ['$http', function($http){
    return{
        create:function(user, callback){
            $http({
                method:"POST",
                url:"/users",
                data:user
            }).then(function(user){
                callback();
            })
        },
        
        login:function(user,callback){
            $http({
                method:"POST",
                url:"/login",
                data:user
            }).then(function(user){
                callback();
            })
        },

        logout:function(callback){
            $http({
                method:"GET",
                url:"/logout",
            }).then(function(){
                callback();
            })
        },

    }
}])
app.factory("questionFactory", ["$http", function($http){
    var questions = {data:[]}
    var factory = {};
    factory.getQuestions = function(callback){
        $http({
            method:"GET",
            url:'/questions'
        }).then(function(res){
            questions.data = res.data;
            callback(questions);
        })
    }
    factory.getQuestion = function(id,callback){
        $http({
            method:"GET",
            url:'/questions/'+id
        }).then(function(res){
            questions.data = res.data;
            callback(questions);
        })
    }
    factory.addQuestion = function(questionInfo, callback){
        $http({
            method:"POST",
            url:"/questions",
            data: questionInfo
        }).then(function(res){
            callback();
        })
    }
    factory.upVote = function(questionInfo, callback){
        $http({
            method:"PUT",
            url:'/questions/up/'+questionInfo._id
        }).then(function(res){
            callback();
        })
    }
    factory.downVote = function(questionInfo, callback){
        $http({
            method:"PUT",
            url:'/questions/down'+questionInfo._id
        }).then(function(res){
            callback();
        })
    }
    factory.logout = function(callback){
        $http({
            method:"GET",
            url:"/logout",
        }).then(function(){
            callback();
        })
    }

    return factory;
}])

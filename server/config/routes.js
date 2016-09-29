var questions = require('../controllers/Questions.js');
var users = require('../controllers/Users.js');

module.exports = function(app){

    app.post('/users', users.register)
    app.post('/login', users.login)
    app.get('/logout', users.logout);

    // Protected routes
    app.use(userAuth);
    app.get('/questions', questions.getAll);
    app.post('/questions', questions.post);
    app.post('/new_question', questions.post);
    app.get('/', questions.getAll);
    app.get('/questions/:id', questions.get);

}
function userAuth(req,res,next){
    if (req.session.user){
        next();
    }else{
        res.sendStatus(401);
    }
}

/* Require our modules */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');


/* Set our session config */
var sessionConfig = {
 secret:'CookieMonster', // Secret name for decoding secret and such
 resave:false, // Don't resave session if no changes were made
 saveUninitialized: true, // Don't save session if there was nothing initialized
 name:'myCookie', // Sets a custom cookie name
 cookie: {
  secure: false, // This need to be true, but only on HTTPS
  httpOnly:false, // Forces cookies to only be used over http
  maxAge: 3600000
 }
}


/* Start our Express */
var app = express();


/* Require our Mongoose config */
require('./server/config/mongoose.js');


/* Start up our Middleware */
app.use(session(sessionConfig));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))

/* This is our interceptor */
app.use(function(req,res,next){
    console.log(req.session);
    next();
})


/* Configure our static locatoin */
app.use(express.static(path.join(__dirname,"client", "static")))


/* Require our routes */
require('./server/config/routes.js')(app);


/* Start our server listening */
var port = 9001;
app.listen(port, function(){
    console.log(port);
})
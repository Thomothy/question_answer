/* Require our modules */
var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');


/* Connect our database */
mongoose.connect('mongodb://localhost/qa');


/* Set our models path */
var models_path = path.join(__dirname, '../models/');


/* Require all remaining .js */
fs.readdirSync(models_path).forEach(function(file){
    if (file.indexOf(".js") >= 0){
        require(path.join(models_path, file));
    }
})

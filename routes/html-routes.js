//require all the models



//assuming that requiring this models folder should get all the models.
var db = require('../models')


module.exports = function(app){


    //assuming handlebars starts to work right, this should render the main html page.
    app.get('/login',function(req,res){
        res.render('login');
    });

    // page two of the app should be renereder if it works
    app.get('/pagetwo',function(req,res){
        res.render('pagetwo');
    });

}
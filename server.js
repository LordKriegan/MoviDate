var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./models')



//requiring handlesbars
var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");


//for the PORT
var PORT = process.env.PORT || 8080;



app.use(express.static('public'));



//body-parser copy-paste
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



//require('./routes/api-routes')(app);
require('./routes/html-routes')(app);


db.sequelize.sync({force:true}).then(function(){
    app.listen(PORT, function(err){
        if (err) throw err;
        console.log('listening on port: '+PORT)
    })
})
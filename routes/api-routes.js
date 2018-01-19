//this basically recieves the express object 'app' which acts as the express server. This function simply adds some functions to the app object.

//should invoke index.js and grab the models so that they are available for use.
var db = require('../models')



module.exports = function(app){


    //should there be the /api in front?
    //This is for the 
    app.get("/api/post", function(req,res){

    })


    //be able to add new user to the database.
    app.post('/api/user', function(req,res){

        //check username, password, age, gender, location, profile picture

        //if everything is filled out, the total expression should be false. If something is blank, it should 
        // if ((!gender) || (!age) || (!location) || (!password) || (!username) ){
            //bad user input


        // }

        // else {
        //     //good user input
        // }
    })



}
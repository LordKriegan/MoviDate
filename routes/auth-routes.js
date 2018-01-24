

var db = require('../models')


module.exports = function(app){



    //login user
    app.post('/api/loginUser',function(req,res){

        if ((req.body.password) && (req.body.userName) ){

            db.User.findOne({
                where: {
                    userName: req.body.userName
                }
            }).then(function(dbData){
                if (req.body.password === dbData.password){

                    res.status(200).send('Authentication successful.')
                }
                else{
                    res.status(400).send('Authentication failed.')
                }
            })

        }
        

    })


    //be able to add new user to the database.
    //Checks the prerequisites
    app.post('/api/createUser', function(req,res){
        //check username, password, age, gender, location, profile picture

        //if everything is filled out, the total expression should be false. If something is blank, it should 
        if ((req.body.password) && (req.body.userName) ){
            db.User.create({
                userName: req.body.userName,
                password: req.body.password,
                age: req.body.age,
                gender: req.body.gender,
                description: req.body.description,
                location: res.body.location
            }).then(function(dbData){
                res.json(dbData);
            })

        }

        else {
            res.status(400).send('Username or Password missing')
        }
    })
}
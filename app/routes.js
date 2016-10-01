/**
 * Created by sumukh on 9/29/16.
 */
var mongoose = require('mongoose');
var User = require('./model.js');
module.exports =function (app) {
    app.get('/users',function (req,res) {
       var query =User.find({});
       query.exec(function (err,users) {
          if(err)
              res.send(err);

           res.json(users);
       });

    });
    app.post('/users', function(req, res){

        // Creates a new User based on the Mongoose schema and the post bo.dy

        var newuser = new User(req.body);

        // New User is saved in the db
        newuser.save(function(err){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of the new user
            res.json(req.body);
        });
    });

};
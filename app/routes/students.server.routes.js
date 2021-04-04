// Load the 'users' controller
var students = require('../../app/controllers/students.server.controller');
var express = require('express');
var router = express.Router();
// Define the routes module' method
module.exports = function (app) {
    // handle a get request made to /users path
    // and list users when /users link is selected
    app.get("/students",students.requiresLogin,students.list); //go to http://localhost:3000/users to see the list
    //handle a post request made to root path
    app.post('/createStudent', students.create);
    //
    // Set up the 'users' parameterized routes 
	app.route('/students/:studentId')
    .get(students.read)
    .put(students.update)
    .delete(students.delete)
    // Set up the 'userId' parameter middleware
    //All param callbacks will be called before any handler of 
    //any route in which the param occurs, and they will each 
    //be called only once in a request - response cycle, 
    //even if the parameter is matched in multiple routes
    app.param('studentId', students.studentByID);
    //authenticate user
    app.post('/signinStudent', students.authenticate);
    app.get('/signoutStudent', students.signout);
    app.get('/read_cookie', students.isSignedIn);


    //path to a protected page
	app.get('/welcome',students.welcome);
    
};


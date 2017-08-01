// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var passport = require('passport');
var flash        = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
// var configDB     = require('./config/database.js'); 

const dbConnectString = process.env.MONGODB_URI || "mongodb://localhost/readtome";	

// Database configuration with mongoose
mongoose.connect(dbConnectString, function(error){
	if (error) throw error;

	console.log("connnected to mongoose");
});
// configuration ===============================================================
//mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

app.set('view engine', 'ejs'); // set up ejs for templating
// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./passport/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================

// // Import routes and give the server access to them.
// var routes = require("./controller/controller.js");
// app.use("/", routes);



// Listen on port 3000
app.listen(process.env.PORT || 8080, function() {
  console.log("App running on port 8080!");
});
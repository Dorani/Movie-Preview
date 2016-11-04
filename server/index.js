var express = require('express'); // pulling in that module, assigning it this variable
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var methodOverride = require('method-override');
var _ = require('lodash');

var app = express();

//Add Middleware for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//Connect to MongoDB
mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open', function() {
  console.log('Listening on port 3000...');
  app.listen(3000);
});

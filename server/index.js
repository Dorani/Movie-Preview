var express = require('express'); // pulling in that module, assigning it this variable
var mangoose = require('mongoose');
var bodyParser = require('body-parser')
var methodOverride = require('method-override');
var _ = require('lodash');

 var app = express();

 //Add Middleware for REST API's
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json());
 app.use(methodOverride('X-HTTP-Method-Override'));

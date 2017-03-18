var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgres://MikeB@localhost/sandbox";
var controller = require("./controller.js");

var massiveInstance = massive.connectSync({connectionString : connectionString});

var app = module.exports = express();

app.set('db', massiveInstance);

var db = app.get('db');

controller.getPlanes(app);



// db.new_plane(function(err, planes){
//   console.log(err, "plane added")
// })

// db.get_planes(function(err, planes){
//   console.log(err, planes)
// })

app.use(bodyParser.json());
app.use(cors());

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})

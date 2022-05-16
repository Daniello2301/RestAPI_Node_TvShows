//Impor dependencies
var express = require('express');
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var dotenv = require('dotenv').config();

//Initialize express
var app = express();

//Configure permissions of connection
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());


//Sen message for dafault URl
app.get('/', (req, res) => res.send('Hello world its me creating API usin nodejs, expressjs and mongoDB'))

//Setup server port
var port = process.env.PORT || 3000;

//Launch app to listen to especified port
app.listen(port, () =>{
    console.log("API runing in port " + port)
})

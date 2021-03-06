const express = require('express');
const https = require('https');
const http = require('http');
const cors = require('cors');
const bodyParser = require("body-parser");
const users = require('./userService.js');
const options = {};
const app = express();


// Cors Example on entire application
app.use(cors());
// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// Middleware Example
app.use((req, res,next)=>{
   console.log("Middleware Working");
   //console.log(req);
	next();
});

app.get('/getAllInfo',users.getAllInfo);

// Change to post for security
app.post('/loginUser',users.loginUser);

app.post('/addUser',cors(),users.addUser);

// Cors selectively
app.post('/',cors(),(req , res)=>{
	req.accepts('application/json');
	res.json({"data":["WOrking"]});
});

app.post('/hello-post',cors(),(req , res)=>{
	req.accepts('application/json');
	res.json(req.body);
});

app.get('/hello', cors(), (req, res) => {
  res.json({name:"Abdul", message:"Hello Abdul"});
});

app.listen = function () {
	var server = http.createServer(this)
	return server.listen.apply(server, arguments)
}

http.createServer(app).listen(980);
https.createServer(options, app).listen(9443)
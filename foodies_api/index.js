const express = require('express');
const https = require('https');
const http = require('http');
const cors = require('cors');
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const customers = require('./customerservice.js');
const options = {};
const app = express();
// Cors Example on entire application
app.use(cors());
// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
const TOKEN_SECRET="09f26e402586e2faa8da4c98a35f1b20d6b033c60";


/* Authenication block */
function generateAccessToken(login) {
  return jwt.sign(login,TOKEN_SECRET, { expiresIn: '1800s' });
}


function authenticateToken(req, res, next) {
  const token = req.headers['token']
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

/* How to use tokens in middle ware */
app.get('/test-middle-ware',authenticateToken,function(req,res){
	return res.sendStatus(200);
});

 app.post('/api/auth/login', function (req, res) {
    console.log(req.body.username);
	console.log(req.body.password);
 resp = {
	loggedIn: true,
    username: "",
    password: "",
    token: generateAccessToken({ username: req.body.username })
 }
 console.log(resp);
  res.json(resp);
});


app.post('/api/auth/validate', function (req, res) {
    const token = req.body.jwtToken;
    console.log(token);
    if (token == null) {
        res.sendStatus = 401;
        return res.sendStatus(401)
    }
    try {
      decoded = jwt.verify(token, TOKEN_SECRET);
      console.log(decoded);
      res.sendStatus = 200;
      return res.json({status:200})
    }catch(e){
      console.log(e);
      res.sendStatus = 401;
      return res.json({status:401});
    }

});
/* Authenication block */

// Middleware Example
app.use((req, res,next)=>{
   console.log("Middleware Working");
   //console.log(req);
	next();
});

app.get('/',customers.getAll);

app.post('/getCustomer',customers.getAll);
app.post('/addUser',cors(),customers.addUser);

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




//http.createServer(app).listen(80);
http.createServer(app).listen(3000);
https.createServer(options, app).listen(443)
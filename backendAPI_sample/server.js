const express = require('express')
const app = express()
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const auth = require("./controllers/authenication/v1/auth");
//import body-parser
var bodyParser = require('body-parser');


const swaggerOptions = {
  swaggerDefinition: {
      info: {
          title: 'Ashtons Restful API ',
          description: "Ashton Restuful API"
      },
  },
  apis: ["./controllers/authenication/v1/auth.js"]
}



//configure body-parser for express
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(auth.autheRoutes)

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(3000, console.log('App Listening to port 3000'));
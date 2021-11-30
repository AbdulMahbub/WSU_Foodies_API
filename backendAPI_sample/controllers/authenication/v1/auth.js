const express = require('express');
const autheRoutes = express.Router();
const TOKEN_SECRET="09f26e402586e2faa8da4c98a35f1b20d6b033c60";
const jwt = require('jsonwebtoken');

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
  
/**
 * @swagger
 * /auth/v1/testToken:
 *   get:
 *     description: Test JWT Token Validation
 *     parameters:
 *      - in: header
 *        name: Token
 *        description: Valid token for the header
 *        schema:
 *          type: object
 *          properties:
 *            token:
 *              type: string
 *     responses:
 *       200:
 *         description: Test jwt token validation
 */
  autheRoutes.get('/auth/v1/testToken',authenticateToken,function(req,res){
  return res.sendStatus(200);
  });
  
/**
 * @swagger
 * /auth/v1/login:
 *   post:
 *     description: Test JWT Token Middleware Validation
 *     parameters:
 *      - in: body
 *        name: Login 
 *        description: Login
 *        schema:
 *          type: object
 *          properties:
 *            username:
 *              type: string
 *            password:
 *              type: string
 *     responses:
 *       200:
 *         description: Token is Valid
 *       401:
 *         description: Token not Valid
 */
  autheRoutes.post('/auth/v1/login', function (req, res) {
      console.log(req.body.username);

   resp = {
      username: "",
      password: "",
      token: generateAccessToken({ username: req.body.username })
   }
   console.log(resp);
    res.json(resp);
  });

/**
 * @swagger
 * /auth/v1/validate:
 *   post:
 *     description: Validate Token
 *     parameters:
 *      - in: body
 *        name: Token Validation
 *        description: Validates Token
 *        schema:
 *          type: object
 *          properties:
 *            jwtToken:
 *              type: string
 *     responses:
 *       200:
 *         description: Token is Valid
 *       401:
 *         description: Token not Valid
 */
  autheRoutes.post('/auth/v1/validate', function (req, res) {
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

module.exports = {
    authenticateToken,
    autheRoutes
}
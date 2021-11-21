const sql = require("./mysqlconnections.js");

// constructor
const User = function(user) {
    this.email = user.email;
    this.name = user.name;
    this.standing = user.standing;
    this.password= user.password;
    this.firstName= user.firstName;
    this.lastName= user.lastName;

    // Because age can remain null
    if(user.age != null){ 
      this.age= user.age;
    }

  };

  User.getUser = (req, resp) => {
    let query = "SELECT firstName, lastName FROM users";
    if(req.body.email != undefined){
     query += " where email = '"+req.body.email+"'";
    }

    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        resp.json(err);
        return;
      }
  
      console.log("User: ", res);
      resp.json(res);
    });
  };

  User.getAllInfo = (req, resp) => {
    let query = "SELECT * FROM users";

    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        resp.json(err);
        return;
      }
  
      console.log("users: ", res);
      resp.json(res);
    });
  };

  User.addUser = (req, resp) => {
    let query = "";

    // If age not given
    if(req.body.age == undefined){
     query = "INSERT INTO users (email, `password`, firstName, lastName, standing) VALUES "+
      "('"+req.body.email+"', '"+req.body.password+"', '"+req.body.firstName+"','"+ req.body.lastName+ "', '"+
       req.body.standing+"');";
    }

    // Age given
    else{
      query = "INSERT INTO users (email, `password`, firstName, lastName, age, standing) VALUES "+
      "('"+req.body.email+"', '"+req.body.password+"', '"+req.body.firstName+"', '"+ req.body.lastName+ "', "+
       +req.body.age+", '"+req.body.standing+"');";
    }

    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        resp.json(err);
        return;
      }

      console.log("Users: ", res);
      resp.json(res);
    });
  };

  module.exports = User;
module.exports = {
    apps : [{
      name   : "WSU Foodies API",
      script : "./index.js",
      instances: 4 ,
      exec_mode: "cluster"
    }]
  }
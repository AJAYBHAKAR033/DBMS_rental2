var mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sql@2002",
    database :"dream_home"
  });

  
module.exports=con
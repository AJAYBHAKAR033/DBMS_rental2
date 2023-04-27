// const con = require('../config/Connect');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
var mysql = require('mysql');
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sql@2002",
  database: "dream_home"
});

const OwnerLogin = async (req, res) => {
  console.log(req.body);
  const { userTyp,id, pass } = req.body;

  const sql = `SELECT * FROM authentication WHERE Aid = ? and Typ=?`;
  con.query(sql, [id,userTyp], function (err, result) {
    if (err) throw err;
    if (result.length > 0) {
      const user = result[0];
      // console.log(user.Pass);
      // compare the password and send the appropriate response
      if (user.Pass === pass) {
        console.log("Signed In");
        res.cookie('userId',id);
        res.status(500).json({
            err: "PASSED",
            msg: "User exist",
          });
      } else {
        res.status(500).json({
            err: "FAILED",
            msg: "User Not Exist",
          });
      }
    } else {
        res.status(500).json({
            err: "FAILED",
            msg: "Error",
          });
    }
  });
};

module.exports = { OwnerLogin };

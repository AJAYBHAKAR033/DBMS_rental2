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

const StaffProperty = async (req, res) => {
    const current_uuid = req.cookies.userId;
    console.log(current_uuid);

    const sql='Select * from property_listing where Eid=?';

    con.query(sql,[current_uuid], function(err,result){
        if (err) throw err
        else if(result){
            // console.log(result);
            res.json(result);
        }
    })

};

module.exports = { StaffProperty };

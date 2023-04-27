// const con = require('../config/Connect');
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sql@2002",
    database: "dream_home"
});

const AddEmployee = async (req, res) => {
    // console.log(req.body);
    const staffNumber = "E" + Math.floor(Math.random() * 900000000 + 100000000); // Generate a random 10-digit number
    const { Name, LastName, SEX, dob, Position, BranchId, Supervisior, salary, start_Date } = req.body;
    const sql = 'INSERT INTO staffs (Eid,Lname,Fname,Branch_id,Sex,DOB,Position,Salary,Ssid,Start_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const add_auth='Insert Into Authentication (Typ,Aid,Pass) values (?,?,?)';

    const values = [staffNumber, LastName, Name, BranchId, SEX, dob, Position, salary, Supervisior, start_Date];
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql,values, function(err, result) {
            if (err) throw err;

            con.query(add_auth,['S',staffNumber,dob],function(err)
            {
                if(err) throw err;
            })

            console.log('Employee added Successfully');
            res.json({
                status: "SUCCESS",
                message: "Signin successful",
            });
        });
    });
};

module.exports = { AddEmployee };

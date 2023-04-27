const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sql@2002",
    database: "dream_home"
});
const ClientReg = (req, res) => {
    console.log(req.body);
    

    const clientId = "C" + Math.floor(Math.random() * 900000000 + 100000000); // Generate a random 9-digit number
    const {FirstNameClient,LastNameClient,currentDate,MaxRentClient,TypeClient,ClientEmail,branchId,EmpId,ClientContact,DOB}=req.body;
    const sql = 'INSERT INTO client_list (Client_id,Lname,Fname,Date_of_reg,Max_rent,P_type,Email,Branch_id,Eid,Contact,DOB) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)';
    const add_auth='Insert Into Authentication (Typ,Aid,Pass) values (?,?,?)';

    const values = [clientId,LastNameClient,FirstNameClient,currentDate,MaxRentClient,TypeClient,ClientContact,branchId,EmpId,ClientEmail,DOB];
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql,values, function(err, result) {
            if (err) throw err;

            con.query(add_auth,['C',clientId,DOB],function(err)
            {
                if(err) throw err;
            })

            console.log('Owner added Successfully');
            res.json({
                status: "SUCCESS",
                message: "Registered successful",
            });
        });
    });
};

module.exports = {ClientReg};

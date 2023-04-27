const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sql@2002",
    database: "dream_home"
});
const Ownerreg = (req, res) => {
    console.log(req.body);
    

    const ownerId = "O" + Math.floor(Math.random() * 900000000 + 100000000); // Generate a random 9-digit number
    const {LastNameOwner,FirstNameOwner,OwnerStreet,OwnerCity, OwnerPincode,TelPhoneNumber,OwnerBranchNo,OwnerBusiness,OwnerContactName,OwnerEmail,ownerDob}=req.body;
    const sql = 'INSERT INTO owner_list (Owner_id,Lname,Fname,Street,City,Postcode,Contact,Branch_id,Business,Contact_name,Email,Dob) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)';
    const add_auth='Insert Into Authentication (Typ,Aid,Pass) values (?,?,?)';

    const values = [ownerId,LastNameOwner,FirstNameOwner,OwnerStreet,OwnerCity, OwnerPincode,TelPhoneNumber,OwnerBranchNo,OwnerBusiness,OwnerContactName,OwnerEmail,ownerDob];
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql,values, function(err, result) {
            if (err) throw err;

            con.query(add_auth,['O',ownerId,ownerDob],function(err)
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

module.exports = {Ownerreg};

// const con = require('../config/Connect');
const cookieParser = require("cookie-parser");

var mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sql@2002",
    database: "dream_home"
});

const AddProperty = async (req, res) => {
    const userId = req.cookies;

    console.log(req.body);
    const { PropertyCity,PropertyStreet,PropertyPincode, PropertyType, PropertyRoom,PropertyRent } = req.body;

    
    const propertyId = "P" + Math.floor(Math.random() * 900000000 + 100000000); // Generate a random 9-digit number
    const sql = 'INSERT INTO property_listing (Property_id,Owner_id,P_type,No_room,Rent,Street,City,Postcode,Eid,Stat) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';


    const values = [propertyId,userId.userId,PropertyType,PropertyRoom,PropertyRent,PropertyStreet,PropertyCity,PropertyPincode,'null','0'];
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql,values, function(err, result) {
            if (err) throw err;


            console.log('Property added Successfully');
            res.json({
                status: "SUCCESS",
                message: "Registered successful",
            });
        });
    });
};

module.exports = { AddProperty };

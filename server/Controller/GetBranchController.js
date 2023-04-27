const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sql@2002",
    database: "dream_home"
});
const GetBranch = (req, res) => {

    const city=req.body.City;
    let sql =`Select * from branch_details`;
    if(city)
    {
        sql += ` WHERE City LIKE '%${city}%'`;
    }
    con.query(sql, function (err, result) {
        if (err) {
            res.json({
                status:'400'
            })
        };
        // console.log(result);
        res.send(result);
    });
};

module.exports = {GetBranch };

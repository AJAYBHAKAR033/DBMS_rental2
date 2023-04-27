const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sql@2002",
    database: "dream_home"
});

const SeeProperty = (req, res) => {
    console.log(req.body);
    const { rooms, rent, type, City } = req.body;

    let sql = "SELECT * FROM property_listing WHERE city LIKE '%" + City + "%' and No_room LIKE '" + rooms + "%' and P_type Like '%" + type + "%' and stat Like '%0%'";

    if (rent) {
        sql += " and Rent <= " + rent;
    }

    con.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("An error occurred while fetching the data.");
        } else {
            // console.log(result);
            res.send(result);
        }
    });
};

module.exports = { SeeProperty };

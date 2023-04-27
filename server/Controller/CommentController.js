const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sql@2002",
    database: "dream_home"
});

const Comment = async (req, res) => {
    const current_uuid = req.cookies.userId;
    console.log(current_uuid);
    const sql = `SELECT * FROM property_listing WHERE Owner_id = '${current_uuid}'`;
    const data=[];

    const getData = (sql) => {
        return new Promise((resolve, reject) => {
            con.query(sql, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    };

    const getReviews = (propertyId) => {
        const sql2 = `SELECT * from reviews where Property_id='${propertyId}'`;
        return new Promise((resolve, reject) => {
            con.query(sql2, function(err, result2) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result2);
                }
            });
        });
    };

    try {
        const results = await getData(sql);

        for (let i = 0; i < results.length; i++) {
            const propertyId = results[i].Property_id;
            const reviews = await getReviews(propertyId);

            for (let j = 0; j < reviews.length; j++) {
                const review = reviews[j];

                data.push({
                    Property_id: results[i].Property_id,
                    Property_type: results[i].P_type,
                    No_room: results[i].No_room,
                    Rent: results[i].Rent,
                    Street: results[i].Street,
                    City: results[i].City,
                    Client_id: review.Client_id,
                    Comments: review.Comments 
                });
            }
        }

        // console.log(data);
        res.send(data);
    } catch (error) {
        console.error(error);
        res.json({ status: '400' });
    }
};

module.exports = { Comment };
const mysql = require("mysql");

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Amer1420",
  database: "Find",
  port: "3306",
});

let db = {};

db.getAll = () => {
  return new Promise((resolve, reject) => {
    connect.query("SELECT * FROM place ", (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

db.addPlace = (placeInfo) => {
  return new Promise((resolve, reject) => {
    console.log(placeInfo);
    connect.query(
      "INSERT INTO place VALUES(?,?,?,?,?,?,?)",
      placeInfo,
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve("place added sussfuly !!!!");
      }
    );
  });
};
module.exports = db;

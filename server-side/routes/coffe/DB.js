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
    connect.query("SELECT * FROM coffes", (err, resualt) => {
      if (err) {
        throw reject(err);
      } else {
        return resolve(resualt);
      }
    });
  });
};
module.exports = db;

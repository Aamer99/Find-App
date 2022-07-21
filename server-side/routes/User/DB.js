const mysql = require("mysql");

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Aamer1420",
  database: "Find",
  port: "3306",
});

let db = {};

db.getAll = () => {
  return new Promise((resolve, reject) => {
    connect.query("SELECT * FROM USER ", (err, resualt) => {
      if (err) {
        return reject(err);
      }
      return resolve(resualt);
    });
  });
};

db.getOne = (id) => {
  return new Promise((resolve, reject) => {
    connect.query("SELECT * FROM User WHERE id= ?", id, (err, resualt) => {
      // i can pass array when i use insert
      if (err) {
        return reject(err);
      }
      return resolve(resualt);
    });
  });
};
module.exports = db;

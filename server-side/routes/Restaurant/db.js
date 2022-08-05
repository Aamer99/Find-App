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
    connect.query("SELECT * FROM restaurant ", (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};
db.getOne = (data) => {
  return new Promise((resolve, reject) => {
    connect.query("SELECT * FROM restaurant WHERE id=? ", data, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};
db.search = (name) => {
  return new Promise((resolve, reject) => {
    connect.query("SELECT * FROM restaurant WHERE name=?", name, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

module.exports = db;

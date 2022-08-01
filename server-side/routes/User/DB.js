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
    connect.query("SELECT * FROM users ", (err, resualt) => {
      if (err) {
        return reject(err);
      }
      return resolve(resualt);
    });
  });
};

db.getOneByID = (id) => {
  return new Promise((resolve, reject) => {
    connect.query("SELECT * FROM users WHERE id= ?", id, (err, resualt) => {
      // i can pass array when i use insert
      if (err) {
        return reject(err);
      }
      return resolve(resualt);
    });
  });
};

db.login = (email) => {
  return new Promise((resolve, reject) => {
    connect.query(
      "SELECT * FROM users WHERE email=?",
      email,
      (err, resualt) => {
        if (err) {
          return reject(err);
        }
        if (resualt.length != 0) {
          return resolve(resualt);
        } else {
          return resolve(false);
        }
      }
    );
  });
};

db.register = (user) => {
  return new Promise((resolve, reject) => {
    connect.query(
      "INSERT INTO users VALUES(?,?,?,?,?,?,?)",
      user,
      (err, resualt) => {
        if (err) {
          return reject(err);
        }

        return resolve("successful registered");
      }
    );
  });
};

// db.login = (loginInfo) => {
//   console.log(loginInfo);
//   return new Promise((resolve, reject) => {
//     connect.query(
//       "SELECT  email FROM users WHERE email =?",
//       loginInfo,
//       (err, resualt) => {
//         if (err) {
//           return reject(err);
//         }

//         return resolve(resualt);
//       }
//     );
//   });
// };
module.exports = db;

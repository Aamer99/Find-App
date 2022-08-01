const router = require("express").Router();
const DB = require("./DB");
const bcrypt = require("bcrypt");
const db = require("./DB");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    let resualt = await DB.getAll();
    res.status(200).json(resualt);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    let resualt = await DB.getOneByID(userID);
    res.status(200).json(resualt);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//signup

router.post("/signup", async (req, res) => {
  try {
    const id = Math.floor(Math.random() * 100000 * 120);
    const saltPassword = await bcrypt.genSalt(10);
    const securePasssword = await bcrypt.hash(req.body.password, saltPassword);

    const userInfo = {
      id: id,
      name: req.body.name,
      email: req.body.email,
      password: securePasssword,
      city: req.body.city,
      imageProfile: req.body.imageProfile,
      profileLanguage: req.body.profileLanguage,
    };
    const signup = await db.register([
      userInfo.id,
      userInfo.name,
      userInfo.email,
      userInfo.password,
      userInfo.city,
      userInfo.imageProfile,
      userInfo.profileLanguage,
    ]);

    res.status(200).json(signup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await db.login(email);

    if (!user) {
      res.status(500).json("invalid email or password");
    } else {
      const validatePassowrd = await bcrypt.compare(password, user[0].password);
      if (!validatePassowrd) {
        return res.status(500).json("invalid email or password ");
      } else {
        let token = jwt.sign({ user: user }, process.env.JWT_PRIVATE_KEY, {
          expiresIn: "1m",
        });
        return res.status(200).json(token);
      }
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/verifyToken", async (req, res) => {
  try {
    const token = req.body.token;
    const verifyToken = jwt.verify(
      token,
      process.env.JWT_PRIVATE_KEY,
      (err, resualt) => {
        if (err) {
          throw new Error(err);
        } else {
          res.status(200).json(true);
        }
      }
    );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
module.exports = router;

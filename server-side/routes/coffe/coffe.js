const router = require("express").Router();
const DB = require("./DB");

router.get("/", async (req, res) => {
  try {
    let resualt = await DB.getAll();
    res.status(200).json(resualt);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

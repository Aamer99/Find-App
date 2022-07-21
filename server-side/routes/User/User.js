const router = require("express").Router();
const DB = require("./DB");

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
    let resualt = await DB.getOne(userID);
    res.status(200).json(resualt);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

const router = require("express").Router();
const db = require("./DB");

router.get("/", async (req, res) => {
  try {
    let resualt = await db.getAll();
    res.status(200).json(resualt);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/search/:id", async (req, res) => {
  try {
    const searchTerm = req.params.id;
    const search = await db.search(searchTerm);
    res.status(200).json(search);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

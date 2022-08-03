const router = require("express").Router();
const db = require("./db");

router.get("/", async (req, res) => {
  try {
    const restaurants = await db.getAll();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/search/:id", async (req, res) => {
  try {
    const searchTearm = req.params.id;
    const search = await db.search(searchTearm);
    res.status(200).json(search);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;

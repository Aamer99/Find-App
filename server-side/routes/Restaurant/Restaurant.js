const router = require("express").Router();
const db = require("./db");

router.get("/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    const restaurants = await db.getOne(userID);
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

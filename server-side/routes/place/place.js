const router = require("express").Router();
const db = require("./DB");

router.get("/All", async (req, res) => {
  try {
    const places = await db.getAll();
    res.status(200).json(places);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/addPlace", async (req, res) => {
  try {
    const id = Math.floor(Math.random() * 1000) * 1000 + 100;
    const placeInfo = {
      name: req.body.name,
      logo: req.body.logo,
      mnue: req.body.mnue,
      city: req.body.city,
      type: req.body.type,
      PlaceLocation: req.body.PlaceLocation,
    };
    const newPlace = await db.addPlace([
      id,
      placeInfo.name,
      placeInfo.logo,
      placeInfo.mnue,
      placeInfo.city,
      placeInfo.type,
      placeInfo.PlaceLocation,
    ]);
    res.status(200).json(newPlace);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;

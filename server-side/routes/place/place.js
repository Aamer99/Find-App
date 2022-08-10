const router = require("express").Router();
const db = require("./DB");

router.post("/", async (req, res) => {
  try {
    const type = req.body.type;
    const city = req.body.city;
    const places = await db.getPlaces([type, city]);
    return res.status(200).json(places);
  } catch (error) {
    return res.status(400).json({ message: error.message });
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

router.post("/search/:id", async (req, res) => {
  try {
    const searchTerm = req.params.id;
    const userCity = req.body.userCity;
    const placeType = req.body.placeType;

    const places = await db.getPlaces([placeType, userCity]);
    const searchResult = places.filter((item) => {
      if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      }
    });
    res.status(200).json(searchResult);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

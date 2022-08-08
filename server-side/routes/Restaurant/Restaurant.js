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
router.get("/", async (req, res) => {
  try {
    const userID = req.params.id;
    const restaurants = await db.getAll();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/favoritplaces/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    const placesIDList = await db.getFavoritPlaces(userID); // ALL favorit PlaceID
    const lis = [];
    const FavoritPlaces = placesIDList.map(async (item) => {
      // console.log(item.placeID);
      // const data = async () => {
      //   const placeInfo = await db.getOne("112100");
      //   console.log(placeInfo[0]);
      //   placeList.push(placeInfo);
      // };
      const placeInfo = await db.getOne(item.placeID);
      //console.log(placeInfo[0]);
      lis.push(placeInfo);
      return lis;
    });
    console.log("AA");
    console.log(lis.length);
    res.status(200).json(FavoritPlaces);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;

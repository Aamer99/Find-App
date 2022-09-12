const router = require("express").Router();
const db = require("./db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { PythonShell } = require("python-shell");

// dummy = spawn("python", ["test.py"]);

// dummy.stdout.on("data", function (data) {
//   console.log(data.toString());
// });

// const py = spawn("python", ["test.py"]);
// py.stdout.on("data", function (stdData) {
//   console.log(stdData.toString());
// });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client-side/assets/places/");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage, limits: { fileSize: 200000000 } });
const uploadLogo = multer({ storage: storage });

router.post("/", async (req, res) => {
  try {
    const type = req.body.type;
    const city = req.body.city;

    const places = await db.getPlaces([type, city]);

    places.map((item) => {
      const placeLogo = JSON.parse(item.logo);
      const placeLogoDecoded =
        `data:${placeLogo.mimetype};base64,` +
        fs.readFileSync(placeLogo.path, "base64");
      item.logo = placeLogoDecoded;

      const placeMnue = JSON.parse(item.mnue);
      // const mnueDecoded = placeMnue.map((Item) => {
      //   return (
      //     `data:${Item.mimetype};base64,` + fs.readFileSync(Item.path, "base64")
      //   );
      // });
      item.mnue = placeMnue;
      // console.log("hi");
    });

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
      categorise: req.body.categorise,
    };
    const newPlace = await db.addPlace([
      id,
      placeInfo.name,
      placeInfo.logo,
      placeInfo.mnue,
      placeInfo.city,
      placeInfo.type,
      placeInfo.PlaceLocation,
      placeInfo.categorise,
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

router.get("/favoritPlaces/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    console.log(userID);
    const favoritPlacesID = await db.getFavoritPlaces(userID);
    const places = await db.getAll();
    console.log(places[0]);
    const favoritPlaces = favoritPlacesID.map((item, index) => {
      if (item.placeID == places[index].id) {
        console.log("hi");
        return places[index];
      }
    });
    res.status(200).json(favoritPlaces);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/favoritPlacesID/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    const favoritPlacesID = await db.getFavoritPlaces(userID);
    res.status(200).json(favoritPlacesID);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/Categorise/:id", async (req, res) => {
  try {
    const categorise = req.params.id;
    const Categorise = await db.Categorise(categorise);
    res.status(200).json(Categorise);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/uploadeMnue", upload.array("mnue"), async (req, res) => {
  try {
    res.status(200).json(req.files);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.post(
  "/uploadeLogo",
  uploadLogo.single("placeLogo"),
  async (req, res) => {
    try {
      res.status(200).json(JSON.stringify(req.file));
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);
router.get("/testPythone", async (req, res) => {
  const pyshell = new PythonShell(`${process.cwd()}/routes/place/test.py`);

  pyshell.send("./routes/place/New-Hardees-Menu.jpeg");

  pyshell.on("message", function (message) {
    console.log(message);
  });

  pyshell.end(function (err) {
    if (err) throw err;
    console.log("finished");
  });
});
module.exports = router;

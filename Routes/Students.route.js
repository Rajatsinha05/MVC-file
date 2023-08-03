const { Router } = require("express");
const {
  Student_add,
  StudentImage,
} = require("../controllers/student.controller");
const { check_data } = require("../middlewares/student.middleware");
const multer = require("multer");
let router = Router();

let storage = multer.diskStorage({
  destination: "images",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
}).single("image");

router.post("/image", upload, StudentImage);

router.get("/", (req, res) => {
  console.log(req.query.category);
  res.send("Welcome to the Express server ");
});

router.get("/form", (req, res) => {
  res.render("index");
});
router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/add", check_data, Student_add);

module.exports = router;

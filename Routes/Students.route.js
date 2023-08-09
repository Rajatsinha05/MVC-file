const { Router } = require("express");
const {
  Student_add,
  StudentImage,
  studentdata,
  getadmin,
} = require("../controllers/student.controller");
const { check_data } = require("../middlewares/student.middleware");
const multer = require("multer");

let router = Router();

let storage = multer.diskStorage({
  destination: "images",
  filename: (req, file, cb) => {
    cb(null, Date.now()+file.originalname);
  },
});

const upload = multer({
  storage: storage,
}).array("profile");

router.post("/image", upload, StudentImage);

router.get("/",getadmin)

router.get("/upload", (req, res) => {
  res.render("imgupload")
})

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/data",studentdata )

router.post("/add", check_data, Student_add);



module.exports = router;



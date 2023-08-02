const { Router } = require("express");
const { Student_add } = require("../controllers/student.controller");
const { check_data } = require("../middlewares/student.middleware");

let router = Router();

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

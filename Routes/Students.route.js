const { Router } = require("express");
const { Student_add } = require("../controllers/student.controller");
const { check_data } = require("../middlewares/student.middleware");

let router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Express server ");
});

router.post("/add", check_data,Student_add);

module.exports = router;

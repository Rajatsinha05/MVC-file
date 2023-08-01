const Student = require("../models/student.schema");

const Student_add = async (req, res) => {
  try {
    console.log(req.body);
    await Student.create(req.body);
    res.send("student added successfully");
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { Student_add };

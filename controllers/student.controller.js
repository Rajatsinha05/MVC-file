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


const StudentImage =  (req, res) => {
  console.log(req.file);
res.send("image added successfully");

}

module.exports = { Student_add, StudentImage };

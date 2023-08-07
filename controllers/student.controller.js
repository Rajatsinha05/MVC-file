const getdir = require("../components");
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

const StudentImage = async (req, res) => {
  let path = getdir();
  await Student.findByIdAndUpdate(req.params.id, {
    image: path + "/" + req.file.path,
  });
  res.send("image added successfully");
};


const studentdata=async(req, res) => {
let data=await Student.find()
  res.send(data)
}

module.exports = { Student_add, StudentImage,studentdata };

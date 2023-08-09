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
  console.log(req.files);

  let path = getdir();
let images=[]
let id="64c88b9ce336a13fd31391b8"
for (let i = 0; i < req.files.length; i++) {
  images.push(path + "/" + req.files[i].path);
}
console.log(images);

await Student.findByIdAndUpdate(id,{images:images})
  // await Student.findByIdAndUpdate(req.params.id, {
  //   image: path + "/" + req.file.path,
  // });
  res.send("image added successfully");
};

const studentdata = async (req, res) => {
  let data = await Student.find();
  res.send(data);
};

const getadmin = (req, res) => {
  res.render("index");
};
module.exports = { Student_add, StudentImage, studentdata,getadmin };

const mongoose = require("mongoose");

let studentSchema = new mongoose.Schema({
  name: String,
  number: Number,
  course: String,
  grid: Number,
  city: String,
});

const Student = mongoose.model("Student", studentSchema);
module.exports =Student

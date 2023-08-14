const mongoose = require("mongoose");

let studentSchema = new mongoose.Schema({
username:String,
email:String,
password:String

  
});

const user = mongoose.model("user", studentSchema);
module.exports =user

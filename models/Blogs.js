const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  img: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user",required: true},
});

const Blogs=mongoose.model("blog",BlogSchema);
module.exports =Blogs

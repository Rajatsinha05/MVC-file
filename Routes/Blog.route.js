const { Router } = require("express");
const Blogs = require("../models/Blogs");
const isAuth = require("../middlewares/Auth");
const blogRoute = Router();

blogRoute.get("/", (req, res) => {
  res.render("blog");
});

blogRoute.post("/add", isAuth, async (req, res) => {
  req.body.userId = req.user.id;
  await Blogs.create(req.body);
  console.log(req.body);
  res.send("Hello");
});

blogRoute.get("/data", async (req, res) => {
  let blog = await Blogs.find().populate("userId")

  res.send(blog)
});

module.exports = blogRoute;

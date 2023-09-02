const { Router } = require("express");
const product = require("../models/Product.schema");

const productroute = Router();

productroute.get("/", (req, res) => {
  res.render("products");
});

productroute.get("/get", async (req, res) => {
  res.send(await product.find());
});

productroute.post("/add", async (req, res) => {
  await product.create(req.body);
  // console.log(req.body);
  res.json({ success: "created" });
});

productroute.delete("/destroy/:id", async (req, res) => {
  await product.findByIdAndDelete(req.params.id);
  res.json({ success: "deleted" });
});

productroute.patch("/update/:id", async (req, res) => {
  await product.findByIdAndUpdate(req.params.id, req.body);
  res.json({ success: "updated" });
});

module.exports = productroute;

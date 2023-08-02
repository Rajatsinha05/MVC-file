const express = require("express");
const router = require("./Routes/Students.route");
const connect = require("./config/db");
const cors = require("cors");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");

app.use(cors());
app.use(express.json());
app.use("/student", router);

app.listen(8090, () => {
  console.log("listening on port 8090");
  connect();
});

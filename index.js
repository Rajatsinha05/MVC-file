const express = require("express");
const router = require("./Routes/Students.route");
const connect = require("./config/db");
const cors=require("cors");
const app = express();
app.use(cors())
app.use(express.json());
app.use("/student",router)
app.listen(8090, () => {
  console.log("listening on port 8090");
  connect()
});

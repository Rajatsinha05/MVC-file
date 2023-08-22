const express = require("express");
const router = require("./Routes/Students.route");
const connect = require("./config/db");
const cors = require("cors");
const cookiesparser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const localization = require("./middlewares/LocalAuth");
const AuthGoogle = require("./middlewares/AuthGoogle");

const app = express();
app.use(cookiesparser());
app.use(session({ secret: "secret-key" }));
localization(passport)
AuthGoogle(passport);
app.use(passport.initialize());
app.use(passport.session());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/student", router);
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile',"email"] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/student/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.send("done");
  });
app.listen(8090, () => {
  console.log("listening on port 8090");
  connect();
});

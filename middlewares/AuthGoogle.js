const user = require("../models/studentsignup");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

const AuthGoogle = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.callbackURL,
      },
      function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
       return cb(null,profile)
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    let data = await user.findById(id);
    done(null, data);
  });


};

module.exports = AuthGoogle;

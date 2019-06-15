// START GOOGS STUFF ----------------------------------------------------------------------/
var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20");
var db = require("../models");

module.exports = function (app) {
  app.use(passport.initialize());
  passport.serializeUser(function (user, done) {
    done(null, user);
  });
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });
  passport.use(
    new GoogleStrategy(
      {
        //options for google api
        clientID: process.env.GOOGLECLIENTID,
        clientSecret: process.env.GOOGLECLIENTSECRET,
        callbackURL: process.env.GOOGLEURL
      },
      function (accessToken, refreshToken, profile, done) {
        //pass call back func
        console.log("passport call back fired");
        console.log(profile.displayName);
        console.log(profile._json.email);
        console.log(profile._json.picture);
        console.log(profile.id);
        //search to see if user exists
        db.Student.findOne({
          where: {
            googleId: profile.id
          }
        }).then(function (existingUser) {
          //console.log(existingUser);
          if (existingUser) {
            console.log(existingUser.name + " already exists.");
          } else {
            //create new user for our page
            db.Student.create({
              name: profile.displayName,
              email: profile._json.email,
              image: profile._json.picture,
              googleId: profile.id
            }).then(function (response) {
              console.log(response);
            });
          }
        });
        // return done to go to call back 
        return done(null, {
          profile: profile,
          token: accessToken
        });
      }
    )
  );
  // END GOOGLE STUFF -------------------------------------------------------------------------------/

};

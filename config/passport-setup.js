// START GOOGS STUFF ----------------------------------------------------------------------/
var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20");

module.exports = function(app) {
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
        console.log(profile);
        return done(null, {
          profile: profile,
          token: accessToken
        });
      }
    )
  );
  // END GOOGLE STUFF -------------------------------------------------------------------------------/

};

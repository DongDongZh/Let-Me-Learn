require("dotenv").config();
var express = require("express");
// var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routes/student-api-routes")(app);
require("./routes/teacher-api-routes")(app);
require("./routes/task-api-routes")(app);
require("./routes/htmlRoutes")(app);
// START GOOGS STUFF ----------------------------------------------------------------------/
var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20");
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
//require("./config/passport-setup.js");
require("./routes/googleRoutes/auth-routes.js")(app);
// END GOOGLE STUFF -------------------------------------------------------------------------------/
var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;

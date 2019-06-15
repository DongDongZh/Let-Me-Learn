var passport = require("passport");
var cookieParser = require("cookie-parser");
var cookieSession = require("cookie-session");

module.exports = function (app) {
  app.use(cookieSession({
    name: "session",
    keys: ["123"]
  }));
  app.use(cookieParser());

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    }
    ));

  app.get("/auth/logout", function (req, res) {
    //handle with passport
    req.logout();
    req.session = null;
    res.redirect("/");
  });

  app.get("/auth/google/callback", passport.authenticate("google"), function (
    req,
    res
  ) {
    var loggedInUser = req.user.profile;
    console.log("Name: " + loggedInUser.displayName);
    console.log("Email: " + loggedInUser._json.email);
    console.log("Photo: " + loggedInUser._json.picture);
    console.log("GoogleId: " + loggedInUser.id);
    req.session.token = req.user.token;
    res.redirect("/students");
  });

  app.get("/", function(req, res) {
    console.log("why wont this log");
    if (req.session.token) {
      res.cookie("token", req.session.token);
      res.json({
        status: "session cookie set"
      });
    } else {
      res.cookie("token", "");
      res.json({
        status: "session cookie not set"
      });
    }
  });
};

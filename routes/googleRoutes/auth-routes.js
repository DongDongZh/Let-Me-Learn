var passport = require("passport");

module.exports = function (app) {

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    }
    ));

  app.get("/auth/logout", function (req, res) {
    //handle with passport
    res.send("logging out");
  });

  app.get("/auth/google/callback", passport.authenticate("google"), function (
    req,
    res
  ) {
    var loggedInUser = res.req.user.profile;
    console.log("Name: " + loggedInUser.displayName);
    console.log("Email: " + loggedInUser._json.email);
    console.log("Photo: " + loggedInUser._json.picture);
    console.log("GoogleId: " + loggedInUser.id);
    res.redirect("/students");
  });
};

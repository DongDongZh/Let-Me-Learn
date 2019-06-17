// START GOOGS STUFF ----------------------------------------------------------------------/
// var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20");
var db = require("../models");

module.exports = function (passport) {
  // app.use(passport.initialize());
  // app.use(passport.session());
 
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
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: (__dirname, "/auth/google/callback")
      },
      function (accessToken, refreshToken, profile, done) {
        // Create user in User table. Add other columns as needed.
        //         db.Student.findOrCreate({ where: { googleId: profile.id } })
        //           .then(function () {
        //             return done(null, {
        //               name: profile.displayName,
        //               email: profile._json.email,
        //               image: profile._json.picture,
        //               googleId: profile.id
        //             });
        //           });
        //       }
        //     )
        //   );
        // };

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
              return done(null, {
                profile: profile,
                token: accessToken
              });
            });
          }
        });
      }
      //   db.Teacher.findOne({
      //     where: {
      //       googleId: profile.id
      //     }
      //   }).then(function(existingTeacher) {
      //     if (existingTeacher) {
      //       console.log(existingTeacher.name + "already a teacher.");
      //     }else {
      //       db.Teacher.create({
      //         name: profile.displayName,
      //         email: profile._json.email,
      //         image: profile._json.picture,
      //         googleId: profile.id
      //       }).then(function (response) {
      //         console.log(response);
      //       });
      //     }
      //     // return done to go to call back 
      //     return done(null, {
      //       profile: profile,
      //       token: accessToken
      //     });
      //   });
      // }
    )
  );
  // END GOOGLE STUFF -------------------------------------------------------------------------------/
};

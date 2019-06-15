var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // This request finds all Tasks with the Student associated and displays to the page
  app.get("/students", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/student_homepage.html"));
    db.Task.findAll({}).then(function (dbTask) {
      res.json(dbTask);
      console.log("This is the front page: " + document.cookie);
      
    });
  });

  //******ROUTE HAS BEEN CHANGED*******
  // This request finds a single Student with all their Tasks and displays to page (INACTIVE)
  app.get("/students_browse/:id", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/student_browse.html"));
    db.Student.findOne({ where: { id: req.params.id } })
      .then(function (dbStudent) {
        res.json(dbStudent);
      });
  });

  // This request finds all Tasks with their associated Student and displays to the page
  // app.get("/students_browse", function (req, res) {
  //   res.sendFile(path.join(__dirname, "/../public/student_homepage.html"));
  //   db.Task.findAll({}).then(function (dbTask) {
  //     res.json(dbTask);
  //   });
  // });

  // This request gets the empty form to create a Task
  app.get("/student_post", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/student_post.html"));
    // db.Student.Task.findAll({}).then(function (dbTask) {
    //   res.json(dbTask);
    // });
  });

  //  This request grabs all teachers and their 
  app.get("/teachers", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/teacher_profiles.html"));
    db.Teacher.findAll({}).then(function (dbTeacher) {
      res.json(dbTeacher);
    });
  });

  // This request finds one single teacher and displays their profile to the page.
  app.get("/teachers/:id", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/teacher_profiles.html"));
    db.Teacher.findOne({ where: { id: req.params.id } })
      .then(function (dbTeacher) {
        res.json(dbTeacher);
      });
  });
  // This request should send an empty profile form to be filled out by the teacher
  app.get("/teacher_post/", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/teacher_post.html"));
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(
    //   dbExample
    // ) {
    //   res.render("example", {
    //     example: dbExample
    //   });
    // });
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.sendFile("../public/404.html");
  // });

  app.get("/teacher_profile", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/teacher_profiles.html"));
  }); 
};


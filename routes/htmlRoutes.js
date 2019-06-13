var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
  });

  // Load example page and pass in an example by id
  app.get("/students", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/student_browse.html"));
    db.Student.findAll({}).then(function(dbStudent) {
      res.render("student_browse", {
        student: dbStudent
      });
    });
  });
  app.get("/students/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/student_browse.html"));
    db.Student.findOne({ where: { id: req.params.id } }).then(function(
      dbStudent
    ) {
      res.render("student_browse", {
        student: dbStudent
      });
    });
  });
  app.get("/students_browse", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/student_homepage.html"));
    db.Teacher.findAll({}).then(function(dbTeacher) {
      res.json(dbTeacher);
    });
  });
  
  app.get("/student-posts", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/student_post.html"));
    db.Student.Task.findAll({}).then(function(dbTask) {
      res.render("student_browse", {
        task: dbTask
      });
    });
  });
  app.get("/teachers", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/teacher_browse.html"));
    db.Teacher.findAll({}).then(function(dbTeacher) {
      res.render("student_browse", {
        teacher: dbTeacher
      });
    });
  });
  app.get("/teachers/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/teacher_browse.html"));
    db.Teacher.findOne({ where: { id: req.params.id } }).then(function(
      dbTeacher
    ) {
      res.render("teacher_browse", {
        teacher: dbTeacher
      });
    });
  });
  app.get("/teacher-post/", function(req, res) {
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
};

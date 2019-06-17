module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  // This request finds all Tasks with the Student associated and displays to the page
  app.get("/students", function (req, res) {
    res.render("student_homepage");
  });
  // app.get("/students/:id", function (req, res) {
  //   res.sendFile(path.join(__dirname, "/../public/student_browse.html"));
  //   db.Student.findOne({ where: { id: req.params.id } }).then(function (
  //     dbStudent
  //   ) {
  //     res.render("student_browse", {
  //       student: dbStudent
  //     });
  //   });
  // });
  // app.get("/students_browse", function (req, res) {
  //   res.sendFile(path.join(__dirname, "/../public/student_homepage.html"));
  //   db.Teacher.findAll({}).then(function (dbTeacher) {
  //     res.json(dbTeacher);
  //   });
  // });

  app.get("/student_post", function (req, res) {
    res.render("student_post");
  });

  //  This request grabs all teachers and their 
  app.get("/teachers", function (req, res) {
    res.render("teacher_browse");
  });
  // app.get("/teachers/:id", function (req, res) {
  //   res.sendFile(path.join(__dirname, "/../public/teacher_browse.html"));
  //   db.Teacher.findOne({ where: { id: req.params.id } }).then(function (
  //     dbTeacher
  //   ) {
  //     res.render("teacher_browse", {
  //       teacher: dbTeacher
  //     });
  //   });
  // });

  // app.get("/teacher_post/", function (req, res) {

  //   res.sendFile(path.join(__dirname, "/../public/teacher_post.html"));
  //   // db.Example.findOne({ where: { id: req.params.id } }).then(function(
  //   //   dbExample
  //   // ) {
  //   //   res.render("example", {
  //   //     example: dbExample
  //   //   });
  //   // });
  // });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.sendFile("../public/404.html");
  // });
  // app.get("/teacher_profile", function (req, res) {
  //   res.sendFile(path.join(__dirname, "/../public/teacher_profiles.html"));
  // }); 
};


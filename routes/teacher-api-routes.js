var db = require("../models");

module.exports = function(app) {
  // Get all teachers
  app.get("/api/teachers", function(req, res) {
    db.Teacher.findAll({}).then(function(dbTeachers) {
      console.log(dbTeachers);
      res.json(dbTeachers);
    });
  });
  // Get one teachers and their students
  // app.get("/api/teachers/:id", function(req, res) {
  //   db.Student.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Student]
  //   }).then(function(dbTeachers) {
  //     res.json(dbTeachers);
  //   });
  // });

  // // Create a new teacher
  // app.post("/api/teachers", function(req, res) {
  //   db.Teacher.create(req.body).then(function(dbTeacher) {
  //     res.json(dbTeacher);
  //     console.log(dbTeacher);
  //   });
  // });

  // // Delete an teacher by id
  // app.delete("/api/teachers/:id", function(req, res) {
  //   db.Teacher.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbTeacher) {
  //     res.json(dbTeacher);
  //   });
  // });
};

var db = require("../models");

module.exports = function(app) {
  // Get all students
  app.get("/api/students", function(req, res) {
    db.Student.findAll({
      include: [db.Task]
    }).then(function(dbStudents) {
      res.json(dbStudents);
    });
  });
  // Get one students and their tasks
  app.get("/api/students/:id", function(req, res) {
    db.Student.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Task]
    }).then(function(dbStudents) {
      res.json(dbStudents);
    });
  });

  // Delete an student by id
  app.delete("/api/students/:id", function(req, res) {
    db.Student.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });
};

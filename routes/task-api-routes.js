var db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the posts
  app.get("/api/tasks", function(req, res) {
    var query = {};
    if (req.query.student_id) {
      query.StudentId = req.query.student_id;
    }
    db.Task.findAll({
      where: query,
      include: [db.Student]
    }).then(function(dbTask) {
      res.json(dbTask);
    });
  });
  // Get route for retrieving a single post
  app.get("/api/tasks/:id", function(req, res) {
    db.Task.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Student]
    }).then(function(dbTask) {
      res.json(dbTask);
    });
  });
  // POST route for saving a new post
  app.post("/api/tasks", function(req, res) {
    db.Task.create(req.body).then(function(dbTask) {
      // console.log(dbTask);
      res.json(dbTask);
    });
  });
  // DELETE route for deleting posts
  app.delete("/api/tasks/:id", function(req, res) {
    db.Task.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTask) {
      res.json(dbTask);
    });
  });
  // PUT route for updating posts
  app.put("/api/tasks", function(req, res) {
    db.Task.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(dbTask) {
      res.json(dbTask);
    });
  });
};

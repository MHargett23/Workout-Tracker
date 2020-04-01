const db = require("../models");

module.exports = app => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
      res.json(dbWorkout);
    });
  });
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then(dbWorkout => {
      res.json(dbWorkout);
    });
  });
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
};

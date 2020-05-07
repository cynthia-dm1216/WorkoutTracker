// const express = require('express');
const mongoose = require('mongoose');
// const path = require('path');
// const logger = require('morgan');

const PORT = process.env.PORT || 5000;

const db = require('../models');

// const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",{useNewUrlParser:true}); 

// API route GET /api/workouts
app.get("/api/workouts", (req,res) => {
db.Workout.find({})
  .then(dbWorkout => {
      res.json(dbWorkout);
  })
  .catch(err => {
      res.json(err);
  });
});

// API excercise route - /excercise
app.get("/excercise", (req,res) => {
   res.sendFile(path.join(__dirname, ''))
})

app.listen(PORT, () => {
    console.log(`App running on port ${5000}!`);
});
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const logger = require('morgan');

const PORT = process.env.PORT || 5000;

const db = require('./models');

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


// API Routes - /excercise , '/', '/stats'
app.get("/excercise", (req, res) => {
    res.sendFile(path.join(__dirname + './public/exercise.html'))
});

app.get('/',(req,res) => {
    res.sendFile([path.join(__dirname + "./public/index.html")])
});

app.get('/stats', (req,res) => {
    res.sendFile(path.join(__dirname + "./public/stats.html"))
});

// API route GET /api/workouts
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post("/api/workouts", (req,res) => {
    db.Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err)
    })
});

app.put("/api/workouts/:id", (req,res) => {
    console.log(req.body);
})


app.listen(PORT, () => {
    console.log(`App running on port ${5000}!`);
});


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

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
//Connecting to MongoDB
mongoose.connect(MONGODB_URI);

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

//HTML /exercise Route
app.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

//Post route - /api/workouts
app.post("/api/workouts",(req,res) => {
   db.Workout.create({})
   .then(dbWorkout => {
       res.json(dbWorkout);
   })
   .catch(err => {
       res.json(err);
   });
});

//Put route - /api/workouts/:id
app.put("/api/workouts/:id",({body, params}, res) => {
    db.Workout.findByIdAndUpdate(
        params.id, {
            $push: {exercises: body }
        },
        { new: true}
    ).then(dbWorkout => {
        res.json(dbWorkout)
    }).catch (err => {
        res.json(err);
});
});

app.get('/stats',(req,res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});

//API Get - api/workouts/range
app.get("/api/workouts/range", (req,res) => {
    db.Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout)
    }).catch (err => {
       res.json(err)
    })
});


app.listen(PORT, () => {
    console.log(`App running on port ${5000}!`);
});



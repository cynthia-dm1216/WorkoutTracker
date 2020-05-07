const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Workout Schema
const WorkoutSchema = new Schema ({
    day: Date,
    totalDuration: {
        type: Number,
        default: 0
    }
});

//exporting Wowrkout
const Workout = mongoose.model("Workout",WorkoutSchema);

module.exports = Workout;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Workout Schema
const workout = new Schema ({
 day: {
     type: Date,
     dafault: () => new Date
 },
 exercises: [{
     type: {
         type: String,
         trim: true,
         require: "Enter an exercise type:"
     },
     name: {
         type: String,
         trim: true,
         rewuire: "Enter exercise type:"
     },
     duration: {
        type: Number,
        require: "Enter duration time:"
     },
     weigth: {
         type: Number
     },
     reps: {
         type: Number
     },
     sets: {
         type: Number
     },
     distance: {
         type: Number
     }
     
 }]
});

//exporting Wowrkout
const Workout = mongoose.model("Workout",workout);

module.exports = Workout;
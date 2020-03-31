const mongoose = require("mongoose");

const Schema = mongoose.Schema

const workoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: ()=> new Date()
        },
        excercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter excercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter excercise name"
                },
                duration: {
                    type: Number,
                    required: "Enter excercise length"
                },
                weight: {
                    type: Number,

                },
                reps: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                distance: {
                    type: Number,
                }
            }
        ]
    },
    {
        toJSON: {
          virtuals: true,  
        }
    }
);

workoutSchema.virtual("totalDuration").get(function (){
    return this.excercises.reduce((total, exercise)=>{
        return total + excercise.duration
    }, 0)
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
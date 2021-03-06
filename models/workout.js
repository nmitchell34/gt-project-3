const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date_completed: {
      //what is date? How can we make this current date?
    type: Date,
    default: Date.now
  },
  completed_workout: {
    type: Boolean,
    default: false
  }
  // ,
  // user: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Users",
  //   },
  // ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
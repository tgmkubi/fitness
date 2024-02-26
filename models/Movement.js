const mongoose = require("mongoose");

const movementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  reps: {
    type: Number,
    required: [true, "reps is required"],
  }, 
  set: {
    type: Number,
    required: [true, "set is required"],
  }
});

const Movement = mongoose.model('Movement', movementSchema);

module.exports = Movement;
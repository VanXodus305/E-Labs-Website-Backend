const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("feedback", feedbackSchema);

const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  user:{
    type: mongoose.Types.ObjectId,
    ref:'User',
    required:true
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

module.exports = mongoose.model("Feedback", feedbackSchema);

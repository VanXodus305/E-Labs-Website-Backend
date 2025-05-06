import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  user: {
    // type: mongoose.Types.ObjectId,
    // ref: "User",
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  // rating: {
  //   type: Number,
  //   required: true,
  // },
});

export const Feedback = mongoose.model("Feedback", feedbackSchema);

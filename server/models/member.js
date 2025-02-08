import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    enum: [
      "Coordinator",
      "Assistant Coordinator",
      "Lead",
      "Assistant Team Lead",
      "Member",
    ],
    required: true,
  },
  priority: {
    type: Number,
    enum: [5, 4, 3, 2, 1],
    required: true,
  },
  domain: {
    type: String,
    enum: [
      "web",
      "java",
      "iot",
      "ui/ux",
      "marketing",
      "graphic design",
      "photography/editing",
      "ar&vr",
      "machine learning",
      "cloud computing",
      "cyber security",
    ],
    required: true,
  },
});

const Member = mongoose.model("Member", memberSchema);
export default Member;

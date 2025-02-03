import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user", "team"],
    default: "user",
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: String,
    required: true,
    default: Date.now(),
  },
  feedback: [
    {
      type: String,
    },
  ],
});

const sessionSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: false,
    ref: "User",
  },
  expires_at: {
    type: Date,
    required: true,
  },
});

export const User = mongoose.models.User || model("User", userSchema);
export const Session =
  mongoose.models.Session || model("Session", sessionSchema);

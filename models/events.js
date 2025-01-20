import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    longitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
  },
  createdBy: {
    type: String,
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
});

export const Event = mongoose.model("Event", eventSchema);

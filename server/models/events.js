import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date_time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const MongooseSchema = mongoose.model("Event", eventSchema);
MongooseSchema.collection.getIndexes().then((indexes) => {
  // console.log("Current indexes for Event collection: ");
  // console.log(indexes);
});

export default MongooseSchema;

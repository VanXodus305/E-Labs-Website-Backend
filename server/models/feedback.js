import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  // id: {
  //   type: String,
  //   required: true,
  // },
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

const MongooseSchema = mongoose.model("Feedback", feedbackSchema);
MongooseSchema.collection.getIndexes().then((indexes) => {
  // console.log("Current indexes for Feedback collection: ");
  // console.log(indexes);
});

export default MongooseSchema;

const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
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
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("member", memberSchema);

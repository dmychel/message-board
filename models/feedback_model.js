const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const feedbackSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Feedback = mongoose.model("feedback", feedbackSchema);

module.exports = Feedback;

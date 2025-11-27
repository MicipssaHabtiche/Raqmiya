const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    message: String,
    rating: Number,
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    approved: { type: Boolean, default: false },
    sentiment: {
      type: String,
      enum: ["positive", "neutral", "negative"],
      default: "neutral",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Feedback", feedbackSchema);

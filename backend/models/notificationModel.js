const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    type: String,
    title: String,
    message: String,
    meta: Object,
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Notification", schema);

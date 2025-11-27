const mongoose = require("mongoose");
const resetSchema = new mongoose.Schema(
  { email: String, code: String, expiresAt: Date },
  { timestamps: true }
);
module.exports = mongoose.model("PasswordReset", resetSchema);

const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema(
  {
    fullName: String,
    phoneNumber: String,
    wilaya: String,
    town: String,
    purchases: [
      {
        productId: mongoose.Schema.Types.ObjectId,
        productName: String,
        price: Number,
        date: Date,
      },
    ],
    satisfaction: Number,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Client", clientSchema);

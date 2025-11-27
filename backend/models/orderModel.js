const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    fullName: String,
    phoneNumber: String,
    wilaya: String,
    town: String,
    note: String,
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    productName: String,
    price: Number,
    status: {
      type: String,
      enum: ["pending", "confirmed"],
      default: "pending",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", orderSchema);

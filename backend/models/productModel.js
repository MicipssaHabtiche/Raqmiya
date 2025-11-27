const mongoose = require("mongoose");
const CATEGORIES = [
  "Accessoires",
  "Fans",
  "Power Supplies",
  "Headphones",
  "Chairs",
  "Laptops",
];
const productSchema = new mongoose.Schema(
  {
    name: String,
    category: { type: String, enum: CATEGORIES },
    price: Number,
    details: String,
    imageURL: String,
    stock: Number,
    sold: Number,
  },
  { timestamps: true }
);
module.exports = {
  Product: mongoose.model("Product", productSchema),
  CATEGORIES,
};

const fs = require("fs");
const path = require("path");
const { Product, CATEGORIES } = require("../models/productModel");
const Notification = require("../models/notificationModel");

exports.createProduct = async (req, res, next) => {
  try {
    const { name, price, details, category, stock } = req.body;

    if (!CATEGORIES.includes(category))
      return res.status(400).json({ message: "Invalid category" });

    const imageURL = req.file ? "/uploads/products/" + req.file.filename : "";

    const p = await Product.create({
      name,
      price,
      details,
      category,
      stock: Number(stock) || 0,
      imageURL,
    });

    await Notification.create({
      type: "product",
      title: "New product",
      message: name,
      meta: { productId: p._id },
    });

    res.status(201).json(p);
  } catch (err) {
    next(err);
  }
};

exports.listProducts = async (req, res, next) => {
  try {
    const { sortBy, category, page = 1, limit = 12 } = req.query;

    const q = {};
    if (category) q.category = category;

    const skip = (Number(page) - 1) * Number(limit);
    let cursor = Product.find(q);

    if (sortBy === "latest") cursor = cursor.sort({ createdAt: -1 });

    const total = await Product.countDocuments(q);
    const items = await cursor.skip(skip).limit(Number(limit)).exec();

    res.json({
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
      items,
    });
  } catch (err) {
    next(err);
  }
};

exports.getByCategory = async (req, res, next) => {
  try {
    const category = req.params.category;

    if (!CATEGORIES.includes(category))
      return res.status(400).json({ message: "Invalid category" });

    const products = await Product.find({ category }).sort({ createdAt: -1 });

    res.json(products);
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ message: "Not found" });

    const { name, price, details, category, stock } = req.body;

    if (category && !CATEGORIES.includes(category))
      return res.status(400).json({ message: "Invalid category" });

    if (req.file) {
      if (p.imageURL) {
        const fp = path.join(process.cwd(), p.imageURL.replace("/", ""));
        if (fs.existsSync(fp)) fs.unlinkSync(fp);
      }
      p.imageURL = "/uploads/products/" + req.file.filename;
    }

    if (name) p.name = name;
    if (price) p.price = price;
    if (details) p.details = details;
    if (category) p.category = category;
    if (stock) p.stock = stock;

    await p.save();

    res.json(p);
  } catch (err) {
    next(err);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ message: "Product not found" });
    res.json(p);
  } catch (err) {
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ message: "Not found" });

    if (p.imageURL) {
      const fp = path.join(process.cwd(), p.imageURL.replace("/", ""));
      if (fs.existsSync(fp)) fs.unlinkSync(fp);
    }

    await Product.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
};

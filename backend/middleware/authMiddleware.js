const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel");

// Vérifier token
exports.protect = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ message: "No token" });
    const token = auth.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
    const admin = await Admin.findById(decoded.id);
    if (!admin) return res.status(401).json({ message: "Invalid token" });
    req.admin = admin;
    next();
  } catch (err) {
    res.status(401).json({ message: "Not authorized" });
  }
};

//autorisation admin
exports.adminOnly = (req, res, next) => {
  next();
};

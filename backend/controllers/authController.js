const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: "Admin not found" });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(400).json({ message: "Incorrect password" });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ token, admin: { id: admin._id, email: admin.email } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(400).json({ message: "Admin not found" });

  const code = Math.floor(100000 + Math.random() * 900000);
  admin.resetCode = code;
  await admin.save();

  console.log("RESET CODE:", code);

  res.json({
    message: "Verification code sent",
    code: code,
  });
};

// VERIFY CODE
exports.verifyResetCode = async (req, res) => {
  const { email, code } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin || admin.resetCode != code)
    return res.status(400).json({ message: "Invalid code" });

  res.json({ message: "Code verified" });
};

// RESET PASSWORD
exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(400).json({ message: "Admin not found" });

  admin.password = await bcrypt.hash(newPassword, 10);
  admin.resetCode = null;
  await admin.save();

  res.json({ message: "Password updated" });
};

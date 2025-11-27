const express = require("express");
const router = express.Router();

const {
  loginAdmin,
  forgotPassword,
  verifyResetCode,
  resetPassword,
} = require("../controllers/authController");

router.post("/login", loginAdmin);
router.post("/forgot-password", forgotPassword);
router.post("/verify-code", verifyResetCode);
router.post("/reset-password", resetPassword);

module.exports = router;

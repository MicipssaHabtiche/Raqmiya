const express = require("express");
const router = express.Router();
const dash = require("../controllers/dashboardController");
const { protect, adminOnly } = require("../middleware/authMiddleware");
router.get("/stats", protect, adminOnly, dash.stats);
module.exports = router;

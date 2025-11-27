const express = require("express");
const router = express.Router();
const fb = require("../controllers/feedbackController");
const { protect, adminOnly } = require("../middleware/authMiddleware");
router.post("/", fb.createFeedback);
router.get("/", protect, adminOnly, fb.listFeedbacks);
router.patch("/approve/:id", protect, adminOnly, fb.approveFeedback);
router.delete("/:id", protect, adminOnly, fb.deleteFeedback);
module.exports = router;

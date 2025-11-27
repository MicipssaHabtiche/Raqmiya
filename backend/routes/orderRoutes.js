const express = require("express");
const router = express.Router();
const orderCtrl = require("../controllers/orderController");
const { protect, adminOnly } = require("../middleware/authMiddleware");
router.post("/", orderCtrl.placeOrder);
router.get("/", protect, adminOnly, orderCtrl.listOrders);
router.patch("/:id", protect, adminOnly, orderCtrl.updateOrderStatus);
router.delete("/:id", protect, adminOnly, orderCtrl.deleteOrder);
module.exports = router;

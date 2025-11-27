const Product = require("../models/productModel").Product;
const Feedback = require("../models/feedbackModel");
const Order = require("../models/orderModel");
const Notification = require("../models/notificationModel");
exports.stats = async (req, res, next) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalFeedback = await Feedback.countDocuments();
    const totalOrders = await Order.countDocuments();
    const latestOrders = await Order.find().sort({ createdAt: -1 }).limit(5);
    const latestFeedbacks = await Feedback.find()
      .sort({ createdAt: -1 })
      .limit(5);
    const latestNotifications = await Notification.find()
      .sort({ createdAt: -1 })
      .limit(8);
    res.json({
      totalProducts,
      totalFeedback,
      totalOrders,
      latestOrders,
      latestFeedbacks,
      latestNotifications,
    });
  } catch (err) {
    next(err);
  }
};

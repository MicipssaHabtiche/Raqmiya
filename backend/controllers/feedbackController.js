const Feedback = require("../models/feedbackModel");
const Notification = require("../models/notificationModel");
exports.createFeedback = async (req, res, next) => {
  try {
    const { fullName, email, message, rating, productId } = req.body;
    const f = await Feedback.create({
      fullName,
      email,
      message,
      rating,
      product: productId,
      approved: false,
    });
    await Notification.create({
      type: "feedback",
      title: "New feedback",
      message: message.slice(0, 100),
      meta: { feedbackId: f._id },
    });
    res.status(201).json(f);
  } catch (err) {
    next(err);
  }
};
exports.listFeedbacks = async (req, res, next) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const total = await Feedback.countDocuments();
    const items = await Feedback.find()
      .populate("product")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));
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
exports.approveFeedback = async (req, res, next) => {
  try {
    const f = await Feedback.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );
    res.json(f);
  } catch (err) {
    next(err);
  }
};
exports.deleteFeedback = async (req, res, next) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
};

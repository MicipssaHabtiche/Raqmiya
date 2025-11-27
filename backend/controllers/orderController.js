const Order = require("../models/orderModel");
const { Product } = require("../models/productModel");
const Client = require("../models/clientModel");
const Notification = require("../models/notificationModel");

exports.placeOrder = async (req, res, next) => {
  const session = await Product.startSession();
  session.startTransaction();

  try {
    const { productId, fullName, phoneNumber, wilaya, town, note } = req.body;

    const product = await Product.findById(productId).session(session);
    if (!product) {
      await session.abortTransaction();
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.stock <= 0) {
      await session.abortTransaction();
      return res.status(400).json({ message: "Out of stock" });
    }

    product.stock -= 1;
    product.sold = (product.sold || 0) + 1;
    await product.save({ session });

    const order = await Order.create(
      [
        {
          fullName,
          phoneNumber,
          wilaya,
          town,
          note,
          product: product._id,
          productName: product.name,
          price: product.price,
        },
      ],
      { session }
    );

    let client = await Client.findOne({
      fullName,
      phoneNumber,
      wilaya,
      town,
    }).session(session);

    if (!client) {
      client = await Client.create(
        [
          {
            fullName,
            phoneNumber,
            wilaya,
            town,
            purchases: [
              {
                productId: product._id,
                productName: product.name,
                price: product.price,
                date: new Date(),
              },
            ],
          },
        ],
        { session }
      );
    } else {
      client.purchases.push({
        productId: product._id,
        productName: product.name,
        price: product.price,
        date: new Date(),
      });

      await client.save({ session });
    }

    await Notification.create({
      type: "order",
      title: "New order",
      message: `${fullName} ordered ${product.name}`,
      meta: { orderId: order[0]._id },
    });

    await session.commitTransaction();
    session.endSession();
    res.status(201).json(order[0]);
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    next(err);
  }
};

exports.listOrders = async (req, res, next) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const total = await Order.countDocuments();
    const items = await Order.find()
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

exports.updateOrderStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const o = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(o);
  } catch (err) {
    next(err);
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
};

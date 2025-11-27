const Client = require("../models/clientModel");
const Order = require("../models/orderModel");

exports.listClients = async (req, res, next) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (err) {
    next(err);
  }
};

exports.deleteClient = async (req, res, next) => {
  try {
    const client = await Client.findById(req.params.id);

    if (!client) return res.status(404).json({ message: "Not found" });

    await Order.deleteMany({ phoneNumber: client.phoneNumber });

    await Client.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
};

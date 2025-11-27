const express = require("express");
const router = express.Router();
const clientCtrl = require("../controllers/clientController");
const { protect, adminOnly } = require("../middleware/authMiddleware");
router.get("/", protect, adminOnly, clientCtrl.listClients);
router.delete("/:id", protect, adminOnly, clientCtrl.deleteClient);
module.exports = router;

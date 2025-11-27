const express = require("express");
const router = express.Router();
const productCtrl = require("../controllers/productController");
const upload = require("../middleware/uploadMiddleware");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// GET → liste tous les produits
router.get("/", productCtrl.listProducts);

// GET → produits par catégorie
router.get("/category/:category", productCtrl.getByCategory);

// GET → produit par ID
router.get("/:id", productCtrl.getProductById);

// POST → créer un produit
router.post(
  "/",
  protect,
  adminOnly,
  upload.single("image"),
  productCtrl.createProduct
);

// PUT → modifier un produit
router.put(
  "/:id",
  protect,
  adminOnly,
  upload.single("image"),
  productCtrl.updateProduct
);

// DELETE → supprimer un produit
router.delete("/:id", protect, adminOnly, productCtrl.deleteProduct);

module.exports = router;

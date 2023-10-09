const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../Controllers/ProductController");

const router = express.Router();

// =======Create Product fROM Admin Side=========
router.post("/products/new", createProduct);

// =======Get All Products =========
router.get("/products", getAllProducts);

// =======Update  Product Admin Side =========
router.put("/products/:id", updateProduct);

// =======Delete  Product Admin Side =========
router.delete("/products/:id", deleteProduct);

// =======Get Single  Product Details =========
router.get("/products/:id", getSingleProduct);


module.exports = router;

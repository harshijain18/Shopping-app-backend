const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCartItems,
  updateCartItems,
  deleteCart,
} = require("../controllers/cart.controller");


router.post("/addToCart", addToCart);
router.post("/getCartItems", getCartItems);
router.post("/updateCartItems", updateCartItems);
router.post("/deleteCart", deleteCart);

module.exports = router;
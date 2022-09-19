const express = require("express");
const router = express.Router();

const {addProduct, getProducts} = require("../controllers/product.controller")

router.get("/" , getProducts)
router.post('/addProduct' , addProduct);


module.exports = router;
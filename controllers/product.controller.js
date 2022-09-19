const Product = require("../models/product.model");

const getProducts = async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  };
  

const addProduct =async (req,res) => {
    const {name , price , description , image} = req.body;
    const product =await Product.create({
        name , price, description , image
    });
    if(product){
        res.json({message : "Product added successfully"});
    }else{
        res.json({message : "Product not added"})
    }
    
}

module.exports = {
    addProduct,
    getProducts
}
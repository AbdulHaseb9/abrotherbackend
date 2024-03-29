const product = require("../models/products");

// Function that post product to database
const productpost = async (req, resp) => {
  try {
    const {
      name,
      image,
      description,
      actualprice,
      discountprice,
      colours,
      ratings,
      availability,
      category
    } = req.body;
    if (name && image && actualprice && discountprice && availability) {
      const saveproduct = new product({
        name,
        image,
        description,
        actualprice,
        discountprice,
        colours,
        ratings,
        availability,
        category
      });
      await saveproduct.save();
      resp.status(202).json("Product post Successfully");
    } else {
      resp.json("Please fill all fields Properly");
    }
  } catch (error) {
    console.log(error);
  }
};

// Function that get product from database
const getproduct = async (req, resp) => {
  try {
    const products = await product.find();
    if (products) {
      resp.status(200).json(products);
    } else resp.status(404);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getproduct, productpost };

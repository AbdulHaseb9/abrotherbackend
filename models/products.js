const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  actualprice: {
    type: Number,
    require: true,
  },
  discountprice: {
    type: Number,
    require: true,
  },
  colours: {
    type: Array,
  },
  ratings: {
    type: Array,
  },
  availability: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
});

const product = mongoose.model("products", ProductSchema);

module.exports = product;

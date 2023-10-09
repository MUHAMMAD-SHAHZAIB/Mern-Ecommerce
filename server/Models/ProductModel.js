const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true,
  },

  description: {
    type: String,
    required: [true, "Please Enter Product Description"],
  },

  price: {
    type: Number,
    required: [true, "Please Enter Product Price"],
    maxLength: [6, "Price cannot exceed 8 characters"],
  },

  rating: {
    type: Number,
    default: 0,
  },
  image: [
    {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],

  categories: {
    type: String,
    required: [true, "Please Enter Product  Category"],
  },

  stock: {
    type: Number,
    required: [true, "Please Enter Product  Stock"],
    maxLength: [true, "Stock cannot exceed 4 characters"],
    default: 1,
  },

  numberOfReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  reviews: [
    {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      Comment: { type: String, required: true },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

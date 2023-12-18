const mongoose = require("mongoose");

//creating schema object
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    quantity: {
      type: Number,
      required: true,
      defaultValue: 0,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    countInStock: {
      type: Number,
      required: true,
      min: 0,
      max: 255,
    },
    featured: {
      type: Boolean,
      required: false,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// creating model
const Products = mongoose.model("Products", productSchema);

// exporting the model module
module.exports = Products;

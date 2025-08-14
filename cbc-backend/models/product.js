import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    altName: {
      type: String,
      trim: true,
    },
    images: {
      type: [String], // allows multiple image URLs
      default: [],
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    lastPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("products", productSchema);
export default Product;

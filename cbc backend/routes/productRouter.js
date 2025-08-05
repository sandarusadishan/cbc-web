import express from "express";
import {
  getProducts,
  createProducts,
  deleteProducts,
} from "../controllers/ProductController.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.post("/", createProducts);
productRouter.delete("/", deleteProducts);

export default productRouter;

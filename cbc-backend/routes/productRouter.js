import express from "express";
import {
  getProducts,
  createProducts,
  deleteProducts,
  getProductByName,
} from "../controllers/ProductController.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/:name", getProductByName);
productRouter.post("/", createProducts);
productRouter.delete("/:name", deleteProducts);

export default productRouter;

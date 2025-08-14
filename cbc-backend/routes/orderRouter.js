import express from "express";
import { createOrder, deleteOrder, getOrder, getOrderById } from "../controllers/OrderController.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);       
orderRouter.get("/", getOrder);          // Get all orders
orderRouter.get("/:id", getOrderById);    // Get single order
orderRouter.delete("/:id", deleteOrder);  // Delete order

export default orderRouter;

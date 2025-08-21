import Order from "../models/order.js";
import Product from "../models/product.js";
import { isCustomer } from "./UserController.js";

export async function createOrder(req, res) {
  if (!isCustomer) {
    return res.status(401).json({
      message: "Please login as customer to create orders",
    });
  }

  try {
    const latestOrder = await Order.find().sort({ date: -1 }).limit(1);
    let orderId;
    if (latestOrder.length === 0) {
      orderId = "CBC001";
    } else {
      const currentOrderId = latestOrder[0].orderId;
      const numberString = currentOrderId.replace("CBC", "");
      const number = parseInt(numberString);
      const newNumber = (number + 1).toString().padStart(4, "0");
      orderId = "CBC" + newNumber;
    }

    const newOrderData = req.body;
    const newProductArray = [];

    // Ensure orderedItems exists and is an array
    if (!newOrderData.orderedItems || !Array.isArray(newOrderData.orderedItems)) {
      return res.status(400).json({
        message: "Invalid request body. 'orderedItems' array is required.",
      });
    }

    for (let i = 0; i < newOrderData.orderedItems.length; i++) {
      const item = newOrderData.orderedItems[i];

      if (!item.productId) {
        return res.status(400).json({
          message: `Product Id is missing for item at index ${i}.`,
        });
      }

      const product = await Product.findOne({
        productId: item.productId,
      });

      if (!product) {
        return res.status(404).json({
          message: `Product with Id ${item.productId} not found`,
        });
      }

      newProductArray[i] = {
        name: product.name,
        price: product.price,
        quantity: item.quantity,
        image: product.images[0],
      };
    }

    newOrderData.orderedItems = newProductArray;
    newOrderData.orderId = orderId;
    newOrderData.email = req.user.email;
    newOrderData.userId = req.user.userId; // Assuming userId is available in the request user object

    const order = new Order(newOrderData);
    await order.save();
    res.json({
      message: "Order created successfully",
      orderId: order.orderId,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// GET all orders
export async function getOrder(req, res) {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// GET single order by ID
export async function getOrderById(req, res) {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// DELETE order by ID
export async function deleteOrder(req, res) {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
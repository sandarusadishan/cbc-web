import Order from "../models/order.js";
import { isCustomer } from "./UserController.js";

export async function createOrder(req, res) {
  if (!isCustomer) {
    res.json({
      message: "Please login as customer to create orders",
    });
  }

  try {
    const latestOrder = await Order.find().sort({ date: -1 }).limit(1);
    let orderId;
    if (latestOrder.length == 0) {
      orderId = "CBC001";
    } else {
      const currentOrderId = latestOrder[0].orderId;

      const numberString = currentOrderId.replace("CBC", "");
      const number = parseInt(numberString);
      const newNumber = (number + 1).toString().padStart(4, "0");
      orderId = "CBC" + newNumber;
    }
    const newOrderDate = req.body;
    newOrderDate.orderId = orderId;
    newOrderDate.email = req.user.email;

    const order = new Order(newOrderDate);
    await order.save();
    res.json({
      message: "Order created successfully",
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

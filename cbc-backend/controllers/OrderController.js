import Order from "../models/order.js";
import Product from "../models/product.js";
import { isCustomer } from "./UserController.js";

/**
 * Create a new order
 */
export async function createOrder(req, res) {
  try {
    // ✅ Check customer role
    if (!isCustomer(req.user)) {
      return res.status(403).json({
        message: "Please login as customer to create orders",
      });
    }

    // ✅ Generate orderId
    const latestOrder = await Order.find().sort({ date: -1 }).limit(1);
    let orderId;
    if (!latestOrder.length) {
      orderId = "CBC001";
    } else {
      const currentOrderId = latestOrder[0].orderId;
      const numberString = currentOrderId.replace("CBC", "");
      const newNumber = (parseInt(numberString) + 1).toString().padStart(4, "0");
      orderId = "CBC" + newNumber;
    }

    // ✅ Process ordered items
    const newProductArray = [];
    for (let item of req.body.orderedItems) {
      const product = await Product.findOne({ productId: item.productId });
      if (!product) {
        return res.status(404).json({
          message: `Product with Id ${item.productId} not found`,
        });
      }

      newProductArray.push({
        name: product.productName,
        price: product.price,
        quantity: item.quantity,
        image: product.images[0] || "",
      });
    }

    // ✅ Create order object
    const newOrder = new Order({
      orderId,
      userId: req.user._id,
      email: req.user.email,
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      notes: req.body.notes || "",
      orderedItems: newProductArray,
    });

    await newOrder.save();
    res.json({ message: "Order created successfully", orderId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * Get all orders
 */
export async function getOrders(req, res) {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * Get order by ID
 */
export async function getOrderById(req, res) {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * Delete order by ID
 */
export async function deleteOrder(req, res) {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) return res.status(404).json({ message: "Order not found" });
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

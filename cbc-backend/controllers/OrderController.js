import Order from "../models/order";

export async function createOrder(req, res) {
  try {
    const latestOrder = await Order.find().sort({ date: -1 }).limit(1);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

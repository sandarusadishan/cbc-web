import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true, // ensures each order number is unique
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", // assuming you have a 'users' collection
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  orderedItems: [
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      image: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  paymentId: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ["preparing", "shipped", "delivered", "cancelled"],
    default: "preparing",
  },
  notes: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
});

const Order = mongoose.model("orders", orderSchema);
export default Order;

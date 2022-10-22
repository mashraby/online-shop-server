import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  order: {
    type: String,
    required: true,
  },
  order_holder: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const OrderModel = mongoose.model("orders", OrderSchema);

export default OrderModel;

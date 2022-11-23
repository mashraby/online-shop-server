import mongoose, { Schema, Types } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Types.Decimal128,
    required: true,
  },
  imgs: {
    type: [{ url: String }],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sub_categorieID: {
    type: Schema.Types.ObjectId,
    ref: "sub_categories",
  },
  created_at: {
    type: Date,
    required: true,
  },
});

const ProductModel = mongoose.model("products", ProductSchema);

export default ProductModel;

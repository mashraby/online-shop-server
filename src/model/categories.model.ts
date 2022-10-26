import mongoose, { Schema } from "mongoose";

const CategorieSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "products",
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const CategorieModel = mongoose.model("categories", CategorieSchema);

export default CategorieModel;

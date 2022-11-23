import mongoose, { Schema, Types } from "mongoose";

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  products: [
    {
      type: Types.ObjectId,
      ref: "products",
    },
  ],
  categoryID: {
    type: Schema.Types.ObjectId,
    ref: "categories",
  },
});

const subCategoryModel = mongoose.model("sub_categories", subCategorySchema);

export default subCategoryModel;

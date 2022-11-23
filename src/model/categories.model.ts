import mongoose, { Schema } from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  sub_categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "sub_categories",
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const CategoryModel = mongoose.model("categories", CategorySchema);

export default CategoryModel;

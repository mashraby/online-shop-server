import mongoose from "mongoose";

const CategorieSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updated_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const CategorieModel = mongoose.model("categories", CategorieSchema);

export default CategorieModel;

import mongoose from "mongoose";

const CategorieSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});

const CategorieModel = mongoose.model("categories", CategorieSchema);

export default CategorieModel;

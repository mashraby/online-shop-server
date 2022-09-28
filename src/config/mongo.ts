import mongoose from "mongoose";

export const connection = async () => {
  return await mongoose.connect("mongodb://localhost:27017/mashrab");
};

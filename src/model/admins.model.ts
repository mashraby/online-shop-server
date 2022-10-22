import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    require: true,
  },
});

const AdminModel = mongoose.model("admins", AdminSchema);

export default AdminModel;

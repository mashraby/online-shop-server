import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username must be entered !"],
    unique: [true, "Username must be unique !"],
    min: [3, "Username must contain at least 3 letters"],
    max: [12, "Username must contain at least 3 letters"],
  },
  password: {
    type: String,
    required: [true, "Username must be entered !"],
  },
  role: {
    type: String,
    require: true,
  },
});

const AdminModel = mongoose.model("admins", AdminSchema);

export default AdminModel;

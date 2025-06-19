import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ["Farmer", "Buyer"], required: true },
  totalCrops: {
    type: Number,
    default: 0,
  },
  
});

export default mongoose.model("User", UserSchema);

import mongoose from "mongoose";

const cropSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // this must match your user model name
  },
});

const Crop = mongoose.model("Crop", cropSchema);
export default Crop;

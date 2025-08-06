import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import cropRoutes from "./routes/crop.js";
import farmerRoutes from "./routes/farmer.js";
import buyerRoutes from "./routes/buyer.js";
import messageRoutes from "./routes/messageControllers.js";


dotenv.config();
const app = express();
app.use(express.json());
const allowedOrigins = [
  'https://farmrev.vercel.app',
  'https://farm-rev-git-main-sarthakkeches-projects.vercel.app',
  'http://localhost:5174',
  'http://localhost:5173',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed for this origin: ' + origin));
    }
  },
  credentials: true
}));

mongoose.connect(process.env.MONGO_URI ||"mongodb://localhost:27017/Framrev")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));


app.use("/api/auth", authRoutes);
app.use("/api/crop", cropRoutes);
app.use("/api/farmer", farmerRoutes);
app.use("/api/buyer",buyerRoutes);
app.use("/api/messages",messageRoutes);


app.listen(5000, () => console.log("Server running on port 5000"));

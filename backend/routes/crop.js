import express from "express";
import Crop from "../models/Crop.js";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

import { populate } from "dotenv";
//import verifyToken from "../middelware/verifyToken.js";

const router = express.Router();

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ message: "Unauthorized" });

  jwt.verify(token, "SECRET_KEY", (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.userId = decoded.id;
    next();
  });
};

router.post("/add", authMiddleware, async (req, res) => {
  const { name, quantity } = req.body;

  try {
    const newCrop = new Crop({ userId: req.userId, name, quantity });
    await newCrop.save();

    // Increment the totalCrops count for the user (farmer)
    await User.findByIdAndUpdate(req.userId, { $inc: { totalCrops: 1 } });

    res.json({ success: true });
  } catch (error) {
    console.error("Error adding crop:", error);
    res.status(500).json({ success: false, message: "Failed to add crop" });
  }
});
router.get("/mycrops", authMiddleware, async (req, res) => {
  const crops = await Crop.find({ userId: req.userId });
  res.json({ success: true, crops });
});

router.get("/allcrops", authMiddleware, async (req, res) => {
  try {
    const crops = await Crop.find().populate("userId", "name email");
   

    res.status(200).json({ success: true, crops });
  } catch (error) {
    console.error("Error fetching all crops:", error);
    res.status(500).json({ success: false, message: "Failed to fetch crops" });
  }
});

// DELETE /api/crop/delete/:id
router.delete("/delete/:id", authMiddleware, async (req, res) => {
  const cropId = req.params.id;
  try {
    await Crop.findByIdAndDelete(cropId);
    res.status(200).json({ message: "Crop deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete crop" });
  }
});

export default router;

import express from "express";
import User from "../models/User.js";

const router = express.Router();

// GET top farmers sorted by total crops
router.get("/top", async (req, res) => {
  try {
    // Find all farmers and sort them by totalCrops in descending order
    const topFarmers = await User.find({ role: "Farmer" })
      .sort({ totalCrops: -1 })
      .select("name email totalCrops");

    res.status(200).json({ success: true, farmers: topFarmers });
  } catch (error) {
    console.error("Error fetching top farmers:", error);
    res.status(500).json({ success: false, message: "Failed to fetch top farmers" });
  }
});

export default router;

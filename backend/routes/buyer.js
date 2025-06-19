import express from "express";
import User from "../models/User.js";

const router = express.Router();

// GET top farmers sorted by total crops
router.get("/buy", async (req, res) => {
  try {
    // Find all farmers and sort them by totalCrops in descending order
    const buyer = await User.find({ role: "Buyer" })
      .select("name email ");

    res.status(200).json({ success: true, buyer: buyer});
  } catch (error) {
    console.error("Error fetching top farmers:", error);
    res.status(500).json({ success: false, message: "Failed to fetch top farmers" });
  }
});

export default router;

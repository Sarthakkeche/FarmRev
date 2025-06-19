import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// Send message
router.post("/send", async (req, res) => {
  const { senderId, receiverId, message } = req.body;
  try {
    const newMessage = new Message({ senderId, receiverId, message });
    await newMessage.save();
    res.json({ success: true, message: "Message sent!" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

// Get conversation between two users
router.get("/:userId1/:userId2", async (req, res) => {
  const { userId1, userId2 } = req.params;
  try {
    const messages = await Message.find({
      $or: [
        { senderId: userId1, receiverId: userId2 },
        { senderId: userId2, receiverId: userId1 },
      ],
    }).sort("timestamp");
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

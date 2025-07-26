const express = require("express");
const router = express.Router();
const User = require("../models/UserData");

// Save/update user data
router.post("/save", async (req, res) => {
  const { userId, stats } = req.body;
  if (!userId || !stats) return res.status(400).json({ error: "Missing userId or stats" });
  const now = new Date();
  const prev = await User.findOne({ userId });
  if (prev) {
    prev.stats = stats;
    prev.updatedAt = now;
    await prev.save();
  } else {
    await User.create({ userId, stats, updatedAt: now });
  }
  res.json({ status: "saved" });
});

// Load user data
router.get("/load", async (req, res) => {
  const userId = req.query.userId;
  if (!userId) return res.status(400).json({ error: "Missing userId" });
  const u = await User.findOne({ userId });
  if (!u) return res.status(404).json({ error: "Not found" });
  res.json({ stats: u.stats, updatedAt: u.updatedAt });
});

module.exports = router;
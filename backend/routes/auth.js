const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const user = new User({ fullName, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login a user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    res.status(200).json({ message: "Login successful", userId: user._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
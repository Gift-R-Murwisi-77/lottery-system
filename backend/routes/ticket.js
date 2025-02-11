const express = require("express");
const Ticket = require("../models/Ticket");
const router = express.Router();

// Buy a lottery ticket
router.post("/buy", async (req, res) => {
  const { userId, numbers } = req.body;

  try {
    // Validate input
    if (!userId || !numbers || numbers.length !== 6) {
      return res.status(400).json({ error: "Invalid input" });
    }

    // Create a new ticket
    const ticket = new Ticket({ userId, numbers });
    await ticket.save();

    res.status(201).json({ message: "Ticket purchased successfully", ticket });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all tickets for a user
router.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const tickets = await Ticket.find({ userId });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
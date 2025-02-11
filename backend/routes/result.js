const express = require("express");
const Result = require("../models/Result");
const router = express.Router();

// Get the latest lottery result
router.get("/latest", async (req, res) => {
  try {
    const result = await Result.findOne().sort({ date: -1 }); // Get the most recent result
    if (!result) {
      return res.status(404).json({ message: "No results found" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all past results
router.get("/", async (req, res) => {
  try {
    const results = await Result.find().sort({ date: -1 }); // Get all results sorted by date
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new result (for admin use only)
router.post("/", async (req, res) => {
  const { numbers } = req.body;

  try {
    // Validate input
    if (!numbers || numbers.length !== 6) {
      return res.status(400).json({ error: "Invalid input" });
    }

    // Create a new result
    const result = new Result({ numbers });
    await result.save();

    res.status(201).json({ message: "Result added successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
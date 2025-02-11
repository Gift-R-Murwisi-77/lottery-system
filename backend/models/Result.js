const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  numbers: { type: [Number], required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Result", ResultSchema);
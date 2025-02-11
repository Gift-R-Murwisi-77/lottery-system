const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  numbers: { type: [Number], required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Ticket", TicketSchema);
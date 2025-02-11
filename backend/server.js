
/*main file of the backend server*/

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth")); // Authentication routes
app.use("/api/ticket", require("./routes/ticket")); // Ticket routes
app.use("/api/result", require("./routes/result")); // Result routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
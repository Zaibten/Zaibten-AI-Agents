const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Load environment variables
dotenv.config();

// Calling of the routes
const authRoutes = require("./routes/authRoutes");
const vapiRoutes = require("./routes/vapiRoutes");

const app = express();

// ================================
// Middleware
// ================================

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ================================
// Routes variables
// ================================

app.use("/api/auth", authRoutes);
app.use("/api/vapi", vapiRoutes);

// ================================
// MongoDB Connection
// ================================

let isConnected = false;

const connectDB = async () => {
  if (isConnected && mongoose.connection.readyState === 1) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in .env");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    isConnected = false;

    console.error("❌ MongoDB Connection Error:", error.message);

    throw error;
  }
};

// ================================
// Routes
// ================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Voice AI Agent Backend is running successfully! 🚀",
    environment: process.env.NODE_ENV || "development",
  });
});

// ================================
// Health Check
// ================================

app.get("/api/health", async (req, res) => {
  const mongoStatus = mongoose.connection.readyState === 1;

  res.status(200).json({
    success: true,
    server: "Running",
    database: mongoStatus ? "Connected" : "Disconnected",
    timestamp: new Date(),
  });
});

// ================================
// MongoDB Test Route
// ================================

app.get("/api/database", async (req, res) => {
  try {
    await connectDB();

    res.status(200).json({
      success: true,
      message: "MongoDB is connected successfully! 🎉",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "MongoDB connection failed",
      error: error.message,
    });
  }
});

// ================================
// Vercel
// ================================

module.exports = app;

// ================================
// Local Development
// ================================

if (require.main === module) {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log("");
    console.log("====================================");
    console.log("🚀 Voice AI Agent Backend");
    console.log("====================================");
    console.log(`🌐 Server: http://localhost:${PORT}`);
    console.log(`❤️ Health: http://localhost:${PORT}/api/health`);
    console.log(`🗄️ Database: http://localhost:${PORT}/api/database`);
    console.log("====================================");
    console.log("");
  });

  // Connect MongoDB separately
  connectDB().catch((error) => {
    console.log("⚠️ Server is running, but MongoDB is not connected.");
    console.log(`⚠️ ${error.message}`);
  });
}
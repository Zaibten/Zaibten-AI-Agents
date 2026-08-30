const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
const authRoutes = require("./routes/authRoutes");
const phoneRoutes = require("./routes/phoneRoutes");
const callRoutes = require("./routes/callRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const leadRoutes = require("./routes/leadRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const vapiRoutes = require("./routes/vapiRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/phone-numbers", phoneRoutes);
app.use("/api/calls", callRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/vapi", vapiRoutes);

// Health Routes
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Voice AI Agent Backend is running",
  });
});

app.get("/api/health", async (req, res) => {
  try {
    await connectDB();

    res.status(200).json({
      success: true,
      server: "Running",
      database: mongoose.connection.readyState === 1 ? "Connected" : "Connecting",
      readyState: mongoose.connection.readyState,
      timestamp: new Date(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      database: "Disconnected",
      error: error.message,
    });
  }
});

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    console.error("❌ MONGODB_URI is missing");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
  }
};

// Call this
connectDB();


app.get("/api/debug-db", async (req, res) => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      return res.status(500).json({
        success: false,
        error: "MONGODB_URI is missing in Environment Variables",
      });
    }

    // Hide password in response
    const safeUri = uri.replace(/:([^:@]+)@/, ":****@");

    await mongoose.connect(uri);

    res.json({
      success: true,
      message: "MongoDB Connected Successfully",
      uri: safeUri,
      readyState: mongoose.connection.readyState,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      name: error.name,
    });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
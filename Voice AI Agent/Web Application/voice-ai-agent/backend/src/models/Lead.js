const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    call: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Call",
    },
    fullName: String,
    phoneNumber: {
      type: String,
      required: true,
    },
    email: String,
    score: {
      type: String,
      enum: ["hot", "warm", "cold"],
      default: "warm",
    },
    notes: String,
    source: {
      type: String,
      default: "voice-agent",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);
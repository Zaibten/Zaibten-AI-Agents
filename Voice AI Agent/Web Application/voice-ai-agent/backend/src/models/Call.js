const mongoose = require("mongoose");

const callSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    vapiCallId: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: String,
    direction: {
      type: String,
      enum: ["inbound", "outbound"],
      default: "inbound",
    },
    status: {
      type: String,
      enum: ["queued", "ringing", "in-progress", "ended", "failed"],
      default: "queued",
    },
    startedAt: Date,
    endedAt: Date,
    duration: Number, // in seconds
    transcript: String,
    summary: String,
    recordingUrl: String,
    leadScore: {
      type: String,
      enum: ["hot", "warm", "cold", null],
      default: null,
    },
    metadata: Object,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Call", callSchema);
const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
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
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: String,
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    reason: String,
    status: {
      type: String,
      enum: ["confirmed", "pending", "cancelled", "completed"],
      default: "confirmed",
    },
    calendarEventId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
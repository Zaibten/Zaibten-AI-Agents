const express = require("express");
const router = express.Router();

const Call = require("../models/Call");
const Appointment = require("../models/Appointment");
const Lead = require("../models/Lead");
const PhoneNumber = require("../models/PhoneNumber");

router.post("/webhook", async (req, res) => {
  try {
    const body = req.body;
    const message = body.message;

    if (!message) {
      return res.status(200).json({ received: true });
    }

    console.log("📩 Vapi Event:", message.type);

    // ==============================
    // Helper: Find User from Call
    // ==============================
    const findUserFromCall = async (call) => {
      try {
        const phoneNumberId = call?.phoneNumberId || call?.phoneNumber?.id;

        if (phoneNumberId) {
          const phoneDoc = await PhoneNumber.findOne({
            vapiPhoneNumberId: phoneNumberId,
            isActive: true,
          });
          if (phoneDoc) return phoneDoc.user;
        }
        return null;
      } catch (error) {
        console.error("Error finding user:", error.message);
        return null;
      }
    };

    // ==============================
    // 1. End of Call Report
    // ==============================
    if (message.type === "end-of-call-report") {
      const callData = message.call || {};
      const userId = await findUserFromCall(callData);

      if (!userId) {
        console.log("⚠️ No user found for this call");
        return res.status(200).json({ received: true });
      }

      const duration =
        callData.endedAt && callData.startedAt
          ? Math.floor(
              (new Date(callData.endedAt) - new Date(callData.startedAt)) / 1000
            )
          : 0;

      await Call.create({
        user: userId,
        vapiCallId: callData.id,
        phoneNumber: callData.customer?.number || "Unknown",
        direction: callData.type === "outboundPhoneCall" ? "outbound" : "inbound",
        status: "ended",
        startedAt: callData.startedAt,
        endedAt: callData.endedAt,
        duration,
        transcript: message.transcript || "",
        summary: message.summary || "",
        recordingUrl: message.recordingUrl || "",
        metadata: message,
      });

      console.log("✅ Call saved for user:", userId);
    }

    // ==============================
    // 2. Function / Tool Calls
    // ==============================
    if (message.type === "function-call" || message.type === "tool-calls") {
      const functionCall = message.functionCall || message.toolCallList?.[0];
      const call = message.call || {};
      const name = functionCall?.name || functionCall?.function?.name;
      const parameters = functionCall?.parameters || functionCall?.arguments || {};

      const userId = await findUserFromCall(call);

      if (!userId) {
        return res.status(200).json({
          result: "Sorry, I am unable to process your request right now.",
        });
      }

      console.log("🔧 Function Called:", name);

      // Book Appointment
      if (name === "bookAppointment") {
        await Appointment.create({
          user: userId,
          fullName: parameters.fullName,
          phoneNumber: parameters.phoneNumber,
          email: parameters.email || "",
          date: new Date(parameters.preferredDate),
          time: parameters.preferredTime,
          reason: parameters.reason || "General",
          status: "confirmed",
        });

        await Lead.create({
          user: userId,
          fullName: parameters.fullName,
          phoneNumber: parameters.phoneNumber,
          email: parameters.email || "",
          score: "hot",
          notes: `Appointment booked for ${parameters.preferredDate} at ${parameters.preferredTime}`,
        });

        return res.status(200).json({
          result: `Perfect! I have successfully booked an appointment for ${parameters.fullName} on ${parameters.preferredDate} at ${parameters.preferredTime}.`,
        });
      }

      // Check Availability
      if (name === "checkAvailability") {
        return res.status(200).json({
          result: "Yes, that time slot is available.",
        });
      }

      return res.status(200).json({
        result: "Request processed successfully.",
      });
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error("❌ Webhook Error:", error.message);
    res.status(200).json({ received: true });
  }
});

module.exports = router;
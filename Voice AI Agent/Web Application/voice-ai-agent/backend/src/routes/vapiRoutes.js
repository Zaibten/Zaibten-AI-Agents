const express = require("express");
const router = express.Router();

const Call = require("../models/Call");
const Appointment = require("../models/Appointment");
const Lead = require("../models/Lead");
const PhoneNumber = require("../models/PhoneNumber");

router.post("/webhook", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(200).json({ received: true });
    }

    console.log("📩 Vapi Event →", message.type);

    // ==========================================
    // Helper: Find User from Phone Number
    // ==========================================
    const findUserFromCall = async (call) => {
      try {
        // Vapi usually sends phoneNumberId
        const phoneNumberId = call?.phoneNumberId || call?.phoneNumber?.id;

        if (phoneNumberId) {
          const phoneDoc = await PhoneNumber.findOne({
            vapiPhoneNumberId: phoneNumberId,
            isActive: true,
          });

          if (phoneDoc) return phoneDoc.user;
        }

        // Fallback: try matching by number
        const customerNumber = call?.customer?.number;
        if (customerNumber) {
          // This is less reliable, but can be used as backup
        }

        return null;
      } catch (error) {
        console.error("Error finding user:", error.message);
        return null;
      }
    };

    // ==========================================
    // 1. END OF CALL REPORT
    // ==========================================
    if (message.type === "end-of-call-report") {
      const callData = message.call;
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

      const newCall = await Call.create({
        user: userId,
        vapiCallId: callData.id,
        phoneNumber: callData.customer?.number || "Unknown",
        direction:
          callData.type === "outboundPhoneCall" ? "outbound" : "inbound",
        status: "ended",
        startedAt: callData.startedAt,
        endedAt: callData.endedAt,
        duration,
        transcript: message.transcript || "",
        summary: message.summary || "",
        recordingUrl: message.recordingUrl || "",
        metadata: message,
      });

      console.log("✅ Call saved dynamically for user:", userId);
    }

    // ==========================================
    // 2. FUNCTION CALL (Dynamic)
    // ==========================================
    if (message.type === "function-call") {
      const { functionCall, call } = message;
      const name = functionCall?.name;
      const parameters = functionCall?.parameters || {};

      const userId = await findUserFromCall(call);

      if (!userId) {
        return res.status(200).json({
          result: "Sorry, I could not process your request at the moment.",
        });
      }

      console.log("🔧 Function:", name, "| User:", userId);

      // ---------- Book Appointment ----------
      if (name === "bookAppointment") {
        const appointment = await Appointment.create({
          user: userId,
          fullName: parameters.fullName,
          phoneNumber: parameters.phoneNumber,
          email: parameters.email || "",
          date: new Date(parameters.preferredDate),
          time: parameters.preferredTime,
          reason: parameters.reason || "General",
          status: "confirmed",
        });

        // Create Lead
        await Lead.create({
          user: userId,
          fullName: parameters.fullName,
          phoneNumber: parameters.phoneNumber,
          email: parameters.email || "",
          score: "hot",
          notes: `Appointment booked for ${parameters.preferredDate} at ${parameters.preferredTime}`,
        });

        return res.status(200).json({
          result: `Great! I’ve successfully booked an appointment for ${parameters.fullName} on ${parameters.preferredDate} at ${parameters.preferredTime}.`,
        });
      }

      // ---------- Check Availability ----------
      if (name === "checkAvailability") {
        // Later we will connect real Google Calendar here
        return res.status(200).json({
          result: "Yes, that time slot is available.",
        });
      }

      // Default
      return res.status(200).json({
        result: "Request processed successfully.",
      });
    }

    // Always respond to Vapi
    res.status(200).json({ received: true });
  } catch (error) {
    console.error("❌ Webhook Error:", error.message);
    res.status(200).json({ received: true });
  }
});

module.exports = router;
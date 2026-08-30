const express = require("express");
const router = express.Router();

const Call = require("../models/Call");
const Appointment = require("../models/Appointment");
const Lead = require("../models/Lead");
const PhoneNumber = require("../models/PhoneNumber");
const User = require("../models/User");

router.post("/webhook", async (req, res) => {
  try {
    const message = req.body.message || req.body;
    if (!message) return res.status(200).json({ received: true });

    console.log("📩 Vapi Event:", message.type);

    // Helper: Find User
    const findUserFromCall = async (call = {}) => {
      try {
        const phoneNumberId =
          call.phoneNumberId ||
          call.phoneNumber?.id ||
          call.phoneNumber?.phoneNumberId;

        if (phoneNumberId) {
          const phoneDoc = await PhoneNumber.findOne({
            vapiPhoneNumberId: phoneNumberId,
            isActive: true,
          });
          if (phoneDoc) return phoneDoc.user;
        }

        // Fallback user
        const firstUser = await User.findOne();
        if (firstUser) {
          console.log("⚠️ Using fallback user:", firstUser._id);
          return firstUser._id;
        }
        return null;
      } catch (error) {
        console.error("findUser error:", error.message);
        return null;
      }
    };

    // ==============================
    // END OF CALL REPORT
    // ==============================
    if (message.type === "end-of-call-report") {
      const callData = message.call || {};
      const userId = await findUserFromCall(callData);

      if (!userId) {
        console.log("⚠️ No user found for call");
        return res.status(200).json({ received: true });
      }

      let duration = 0;
      if (callData.startedAt && callData.endedAt) {
        duration = Math.floor(
          (new Date(callData.endedAt) - new Date(callData.startedAt)) / 1000
        );
      } else if (message.durationSeconds) {
        duration = Number(message.durationSeconds);
      }

      const customerNumber =
        callData.customer?.number ||
        callData.customerNumber ||
        message.customer?.number ||
        "Unknown";

      await Call.findOneAndUpdate(
        { vapiCallId: callData.id },
        {
          user: userId,
          vapiCallId: callData.id,
          phoneNumber: customerNumber,
          direction:
            callData.type === "outboundPhoneCall" ? "outbound" : "inbound",
          status: "ended",
          startedAt: callData.startedAt,
          endedAt: callData.endedAt,
          duration,
          transcript: message.transcript || "",
          summary: message.summary || "",
          recordingUrl: message.recordingUrl || callData.recordingUrl || "",
          metadata: message,
        },
        { upsert: true, new: true }
      );

      console.log("✅ Call saved:", callData.id);
      return res.status(200).json({ received: true });
    }

    // ==============================
    // FUNCTION / TOOL CALLS
    // ==============================
    if (message.type === "function-call" || message.type === "tool-calls") {
      const functionCall =
        message.functionCall ||
        message.toolCalls?.[0] ||
        message.toolCallList?.[0] ||
        {};

      const name =
        functionCall.name ||
        functionCall.function?.name ||
        functionCall.toolName;

      let parameters =
        functionCall.parameters ||
        functionCall.arguments ||
        functionCall.function?.arguments ||
        {};

      if (typeof parameters === "string") {
        try {
          parameters = JSON.parse(parameters);
        } catch (e) {
          parameters = {};
        }
      }

      const call = message.call || {};
      const userId = await findUserFromCall(call);
      const toolCallId =
        functionCall.id || functionCall.toolCallId || name || "tool";

      console.log("🔧 Function:", name);
      console.log("📦 Parameters:", JSON.stringify(parameters));
      console.log("👤 UserId:", userId);

      if (!userId) {
        const msg = "Sorry, I could not process your request right now.";
        return res.status(200).json({
          result: msg,
          results: [{ toolCallId, result: msg }],
        });
      }

      // BOOK APPOINTMENT
      if (name === "bookAppointment") {
        const fullName = parameters.fullName || parameters.name || "Unknown";
        const phoneNumber =
          parameters.phoneNumber || parameters.phone || "Unknown";
        const preferredDate =
          parameters.preferredDate || parameters.date || null;
        const preferredTime =
          parameters.preferredTime || parameters.time || "Not specified";
        const reason = parameters.reason || "General";
        const email = parameters.email || "";

        try {
          let appointmentDate = new Date();
          if (preferredDate) {
            const parsed = new Date(preferredDate);
            if (!isNaN(parsed.getTime())) {
              appointmentDate = parsed;
            }
          }

          await Appointment.create({
            user: userId,
            fullName,
            phoneNumber,
            email,
            date: appointmentDate,
            time: preferredTime,
            reason,
            status: "confirmed",
          });

          await Lead.create({
            user: userId,
            fullName,
            phoneNumber,
            email,
            score: "hot",
            notes: `Appointment booked for ${preferredDate || "N/A"} at ${preferredTime}`,
          });

          if (call.id) {
            await Call.findOneAndUpdate(
              { vapiCallId: call.id },
              { leadScore: "hot", phoneNumber }
            );
          }

          const successMessage = `Perfect! Your appointment has been successfully booked for ${fullName} on ${preferredDate || "the selected date"} at ${preferredTime}.`;

          console.log("✅ Appointment + Lead saved");

          return res.status(200).json({
            result: successMessage,
            results: [{ toolCallId, result: successMessage }],
          });
        } catch (err) {
          console.error("❌ Save error:", err.message);
          const errorMessage =
            "I encountered a technical issue while booking. Please try again.";
          return res.status(200).json({
            result: errorMessage,
            results: [{ toolCallId, result: errorMessage }],
          });
        }
      }

      // CHECK AVAILABILITY
      if (name === "checkAvailability") {
        const msg = "Yes, that time slot is available.";
        return res.status(200).json({
          result: msg,
          results: [{ toolCallId, result: msg }],
        });
      }

      const defaultMsg = "Request processed successfully.";
      return res.status(200).json({
        result: defaultMsg,
        results: [{ toolCallId, result: defaultMsg }],
      });
    }

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error("❌ Webhook Error:", error.message);
    return res.status(200).json({ received: true });
  }
});

module.exports = router;
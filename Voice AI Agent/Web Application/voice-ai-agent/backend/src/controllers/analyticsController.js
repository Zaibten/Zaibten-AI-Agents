const Call = require("../models/Call");
const Appointment = require("../models/Appointment");
const Lead = require("../models/Lead");

// @desc    Dashboard Stats
// @route   GET /api/analytics/overview
exports.getOverview = async (req, res) => {
  try {
    const userId = req.user._id;

    const totalCalls = await Call.countDocuments({ user: userId });
    const totalAppointments = await Appointment.countDocuments({ user: userId });
    const totalLeads = await Lead.countDocuments({ user: userId });
    const hotLeads = await Lead.countDocuments({ user: userId, score: "hot" });

    // Calls today
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const callsToday = await Call.countDocuments({
      user: userId,
      createdAt: { $gte: startOfDay },
    });

    res.status(200).json({
      success: true,
      data: {
        totalCalls,
        callsToday,
        totalAppointments,
        totalLeads,
        hotLeads,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
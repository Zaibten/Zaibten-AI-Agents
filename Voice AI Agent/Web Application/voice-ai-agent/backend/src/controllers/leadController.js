const Lead = require("../models/Lead");

// @desc    Get all leads
// @route   GET /api/leads
exports.getMyLeads = async (req, res) => {
  try {
    const leads = await Lead.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .limit(100);

    res.status(200).json({
      success: true,
      count: leads.length,
      leads,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
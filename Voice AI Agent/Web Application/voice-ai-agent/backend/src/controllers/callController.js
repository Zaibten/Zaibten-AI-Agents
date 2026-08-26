const Call = require("../models/Call");

// @desc    Get all calls of logged-in user
// @route   GET /api/calls
exports.getMyCalls = async (req, res) => {
  try {
    const calls = await Call.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .limit(100);

    res.status(200).json({
      success: true,
      count: calls.length,
      calls,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single call
// @route   GET /api/calls/:id
exports.getCallById = async (req, res) => {
  try {
    const call = await Call.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!call) {
      return res.status(404).json({ success: false, message: "Call not found" });
    }

    res.status(200).json({ success: true, call });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
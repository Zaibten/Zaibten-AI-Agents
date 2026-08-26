const PhoneNumber = require("../models/PhoneNumber");

// @desc    Add / Link a Phone Number
// @route   POST /api/phone-numbers
exports.addPhoneNumber = async (req, res) => {
  try {
    const { vapiPhoneNumberId, number, name } = req.body;

    if (!vapiPhoneNumberId || !number) {
      return res.status(400).json({
        success: false,
        message: "vapiPhoneNumberId and number are required",
      });
    }

    // Check if this Vapi number is already linked
    const exists = await PhoneNumber.findOne({ vapiPhoneNumberId });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "This phone number is already linked to an account",
      });
    }

    const phoneNumber = await PhoneNumber.create({
      user: req.user._id,
      vapiPhoneNumberId,
      number,
      name: name || "Main Number",
    });

    res.status(201).json({
      success: true,
      message: "Phone number linked successfully",
      phoneNumber,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get all phone numbers of logged-in user
// @route   GET /api/phone-numbers
exports.getMyPhoneNumbers = async (req, res) => {
  try {
    const phoneNumbers = await PhoneNumber.find({
      user: req.user._id,
      isActive: true,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: phoneNumbers.length,
      phoneNumbers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Delete / Unlink a phone number
// @route   DELETE /api/phone-numbers/:id
exports.deletePhoneNumber = async (req, res) => {
  try {
    const phoneNumber = await PhoneNumber.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!phoneNumber) {
      return res.status(404).json({
        success: false,
        message: "Phone number not found",
      });
    }

    await phoneNumber.deleteOne();

    res.status(200).json({
      success: true,
      message: "Phone number unlinked successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
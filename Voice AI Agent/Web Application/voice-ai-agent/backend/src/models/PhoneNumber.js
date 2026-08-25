const mongoose = require("mongoose");

const phoneNumberSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    vapiPhoneNumberId: {
      type: String,
      required: true,
      unique: true,
    },
    number: {
      type: String,
      required: true, // e.g. +14155552671
    },
    name: {
      type: String,
      default: "Main Number",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PhoneNumber", phoneNumberSchema);
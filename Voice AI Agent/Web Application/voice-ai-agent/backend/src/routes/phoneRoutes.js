const express = require("express");
const router = express.Router();
const {
  addPhoneNumber,
  getMyPhoneNumbers,
  deletePhoneNumber,
} = require("../controllers/phoneController");
const { protect } = require("../middleware/authMiddleware");

router.use(protect); // All routes are protected

router.post("/", addPhoneNumber);
router.get("/", getMyPhoneNumbers);
router.delete("/:id", deletePhoneNumber);

module.exports = router;
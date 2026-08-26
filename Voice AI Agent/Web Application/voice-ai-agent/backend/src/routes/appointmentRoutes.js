const express = require("express");
const router = express.Router();
const {
  getMyAppointments,
  updateAppointment,
} = require("../controllers/appointmentController");
const { protect } = require("../middleware/authMiddleware");

router.use(protect);
router.get("/", getMyAppointments);
router.patch("/:id", updateAppointment);

module.exports = router;
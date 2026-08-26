const express = require("express");
const router = express.Router();
const { getMyCalls, getCallById } = require("../controllers/callController");
const { protect } = require("../middleware/authMiddleware");

router.use(protect);
router.get("/", getMyCalls);
router.get("/:id", getCallById);

module.exports = router;
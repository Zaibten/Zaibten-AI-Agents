const express = require("express");
const router = express.Router();
const { getMyLeads } = require("../controllers/leadController");
const { protect } = require("../middleware/authMiddleware");

router.use(protect);
router.get("/", getMyLeads);

module.exports = router;
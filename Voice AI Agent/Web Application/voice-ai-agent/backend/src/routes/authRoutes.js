const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);

// Protected route - Get current logged in user
router.get("/me", protect, (req, res) => {
  res.status(200).json({
    success: true,
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      businessName: req.user.businessName,
      role: req.user.role,
    },
  });
});

module.exports = router;
import express from "express";
const router = express.Router();

const {
  registerUser,
  loginUser,
  loggedUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, loggedUser);
module.exports = router;

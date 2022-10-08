import express, { Request, Response } from "express";
const {
  registerUser,
  loginUser,
  loggedUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", loggedUser);
module.exports = router;

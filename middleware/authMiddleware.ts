import { Response } from "express";
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(
  async (req: any, res: Response, next: Function) => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        next();
      } catch (e) {
        console.log(e);
        res.status(401);
        throw new Error("non-authorized");
      }
    }
    if (!token) {
      res.status(401);
      throw new Error("non-authorized no Token");
    }
  }
);
module.exports = { protect };

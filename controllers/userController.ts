import { Request, Response } from "express";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//Route /api/users/register
//@Disc  create new user
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please Enter all fields");
  }

  //check if user already exists in the DB
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }

  //hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create new user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});

const loginUser = (req: Request, res: Response) => {
  res.status(200).json({ message: "login user" });
};
const loggedUser = (req: Request, res: Response) => {
  res.status(200).json({ message: "who is logged in" });
};
module.exports = {
  registerUser,
  loginUser,
  loggedUser,
};

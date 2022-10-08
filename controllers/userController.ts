import { Request, Response } from "express";

const registerUser = (req: Request, res: Response) => {
  res.status(200).json({ message: "create new user" });
};
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

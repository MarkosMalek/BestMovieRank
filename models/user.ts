import mongoose from "mongoose";

const userScheme = new mongoose.Schema(
  {
    name: {
      type: "string",
      require: [true, "please add your name"],
    },
    email: {
      type: "string",
      require: [true, "please add your email"],
      unique: true,
    },
    password: {
      type: "string",
      require: [true, "please add a password"],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userScheme);

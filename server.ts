import express, { Request, Response } from "express";
const app = express();
const connectDB = require("./config/db.js");
import cors from "cors";
require("dotenv").config();

app.use(express.static("client"));
app.use(express.json());
app.use(cors());

connectDB();
app.listen(8080, () =>
  console.log("server is listening at http://localhost:8080")
);

app.use("/register", require("./routes/signUp"));

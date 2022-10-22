import express, { Request, Response } from "express";
const app = express();
const connectDB = require("./config/dbConnection.js");
import cors from "cors";
require("dotenv").config();

app.use(express.static("client"));
app.use(express.json());
app.use(cors());

connectDB();

app.listen(3005, () =>
  console.log("server is listening at http://localhost:3005")
);

app.use("/api/users", require("./routes/userRoutes"));

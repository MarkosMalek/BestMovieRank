import express, { Request, Response } from "express";
const app = express();
import cors from "cors";
require("dotenv").config();

app.use(express.static("client"));
app.use(express.json());
app.use(cors());

app.listen(8080, () =>
  console.log("server is listening at http://localhost:8080")
);

app.get("/", function (req: Request, res: Response) {
  res.send("This works");
});

app.post("/data", function (req: Request, res: Response) {
  console.log(req.body);
  return res.sendStatus(200);
});

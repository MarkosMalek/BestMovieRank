const express = require("express");
const app = express();

app.use(express.static("src"));
app.use(express.json());

app.listen(8080, () =>
  console.log("server is listening at http://localhost:8080")
);

const express = require("express");

// app
const app = express();

// requests
app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

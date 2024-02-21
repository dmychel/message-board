const express = require("express");

// app
const app = express();

// engine
app.set("view engine", "ejs");

// requests
app.listen(3000);

app.get("/", (req, res) => {
  res.render("index");
});

app.use((req, res) => {
  res.sendFile("./views/404.html", { root: __dirname });
});

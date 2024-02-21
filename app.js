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
  res.status(404).render("404");
});

const express = require("express");

// app
const app = express();

// engine
app.set("view engine", "ejs");

// requests
app.listen(3000);

// temp arr
const messages = [
  {
    user: "Admin",
    message: "Hello.. Is this thing working?",
    date: new Date(),
  },
  {
    user: "Generic User",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    date: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.use((req, res) => {
  res.status(404).render("404");
});

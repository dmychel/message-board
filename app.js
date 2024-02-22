const express = require("express");
const mongoose = require("mongoose");

// app
const app = express();

// mongodb connectivity
const dbURI =
  "mongodb+srv://admin:Livelife123@message-board.9yyxmzd.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000), console.log("connected to db"))
  .catch((err) => console.log(err));

// css
app.use(express.static(__dirname + "/public"));

// engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
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
  res.render("index", { messages });
});

app.use((req, res) => {
  res.status(404).render("404");
});

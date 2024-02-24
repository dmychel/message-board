const express = require("express");
const mongoose = require("mongoose");
const Post = require('./models/posts_model');
const Feedback = require('./models/feedback_model')

// app
const app = express();

// middleware
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

// mongodb connectivity
const dbURI =
  "mongodb+srv://admin:Livelife123@message-board.9yyxmzd.mongodb.net/forum?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000, 'localhost'), console.log("connected to db"))
  .catch((err) => console.log(err));

// engine
app.set("view engine", "ejs");

// routes

// send new post to database
app.post('/', (req, res) => {
  console.log(req.body)
  const newPost = new Post(req.body)

  newPost.save()
    .then((result) => res.redirect('back'))
    .catch((err) => console.log(err))
})

// send feedback to database
app.post('/feedback-form', (req, res) => {
  console.log(req.body)
  // const newFeedback = new Feedback(req.body)
})

// display data from database
app.get("/", (req, res) => {
  Post.find()
    .then((result) => {
      res.render("index", { posts: result });
    })
    .catch((err) => console.log(err));
});


app.get("/feedback-form", (req, res) => {
  res.render('feedback-form');
})


// 404
app.use((req, res) => {
  res.status(404).render("404");
});

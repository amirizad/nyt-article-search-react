const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(express.static("public"))

const Article = require("./models/Article");

const databaseUri = 'mongodb://localhost/nytreact';

if (process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}

const db = mongoose.connection;
db.on("error", (error) => {
  console.log("My Mongoose Error: ", error);
});

db.once("open", () => {
  console.log("Mongoose connection successful.");
});

app.get("/api/saved", (req, res) => {
  Article.find({}, (error, doc) => {
    if (error) {
      res.send(error);
    }
    else {
      console.log(doc);
      res.send(doc);
    }
  });
});

app.post("/api/saved", (req, res) => {
  const article = req.body.article;
  Article.create({
    a_id: article.id,
    title: article.title,
    date: article.date,
    url: article.url,
    note: article.note
  }, (err) => {
    if (err) {
      console.log(err);
    } else {
      Article.find({}, (error, doc) => {
        if (error) {
          res.send(error);
        }
        else {
          res.send(doc);
        }
      });
    }
  });
});

app.delete("/api/saved", (req, res) => {
  Article.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen ( PORT, () => {
  console.log("App running on port " + PORT);
})
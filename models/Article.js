const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  a_id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  note: {
    type: String
  },
  savedon: {
    type: String,
    required: true,
    default: Date()
  }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
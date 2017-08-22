const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  a_id: {
    type: String
  },
  title: {
    type: String
  },
  date: {
    type: String
  },
  url: {
    type: String
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
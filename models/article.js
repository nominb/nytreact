const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema ({
    title: {type: String, requried: true },
    date: {type: Date, default: Date.now },
    url: { type: String, required: true }
});

const Article = mongoose.mode ("Article", articleSchema);

module.exports = Article;
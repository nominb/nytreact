const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require ("body-parser");
const mongoose = require("mongoose");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//promises with mongoose
mongoose.Promise= global.Promise;
//connect MongoDB
mongoose.connect(
  process.env.MONGODB_URI ||"mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

// DB
const db = require ("/.models")
const {Article} = db



// Define API routes here
app.post("/api/saved", (req, res) => {
  //get posted object
var article = req.body
console.log(article)
  //call on Article
Article.create(article)
.then(() => {
  res.json(article)
})
.catch((err) => {
  res.json(err)
  })
})

app.get("/api/saved", (req, res) => {
  Article.find({}).then(articles => res.json(articles))
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

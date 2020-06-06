const express = require("express");
const server = express();

//catch database
const db = require("./database/db.js")

//configure public folder
server.use(express.static("public"));

//template engine input
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

//configure applications ways
//homepage
//req: query
//res: answer
server.get("/", (req, res) => {
  return res.render("index.html");
});

server.get("/create-point", (req, res) => {
  return res.render("create-point.html");
});

server.get("/search", (req, res) => {
  return res.render("search-results.html");
});

server.listen(3000);
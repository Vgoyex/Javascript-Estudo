const { json } = require("body-parser");
const express = require("express");
const router = require("./routes");
const path = require("path");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(router);

app.listen(3000, (req, res) => {
  console.log("App rodando");
});

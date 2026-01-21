const express = require("express");
const { engine: expressHandlebars } = require("express-handlebars");

const fortune = require("./lib/fortune.js");

const app = express();

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));

app.get("/about", (req, res) => {
  res.render("about", { fortune: fortune.getFortune() });
});

// Error handle 404
app.use((req, res) => {
  res.status(404);
  res.render("404");
});

// Error handle 500
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500);
  res.render("500");
});

app.listen(port, () => {
  console.log(
    `Express started on http://localhost:${port}; ` +
      `press Ctrl-C to terminate.`,
  );
});

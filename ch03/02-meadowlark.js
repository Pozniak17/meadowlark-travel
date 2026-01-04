const expess = require("express");
const { engine: expressHandlebars } = require("express-handlebars");

const app = expess();

// configure Handlebars view engine
app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.render("home"));

app.get("/about", (req, res) => res.render("about"));

// Error handle 404
app.use((req, res) => {
  res.status(404);
  res.render("404");
});

// Error handle 500
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500);
  res.render("500");
});

app.listen(port, () => {
  console.log(
    `Express started on http://localhost:${port}; ` +
      `press Ctrl-C to terminate.`
  );
});

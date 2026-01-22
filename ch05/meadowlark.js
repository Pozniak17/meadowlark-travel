const express = require("express");
const { engine: expressHandlebars } = require("express-handlebars");

const handlebars = require("./lib/handlers");

const app = express();

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", handlebars.home);

app.get("/about", handlebars.about);

// Error handle 404
app.use(handlebars.notFound);

// Error handle 500
app.use(handlebars.serverError);

app.listen(port, () => {
  console.log(
    `Express started on http://localhost:${port}; ` +
      `press Ctrl-C to terminate.`,
  );
});

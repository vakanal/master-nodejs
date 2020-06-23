const express = require("express");
const hbs = require("hbs");
require("./hbs/helpers");

const app = express();

app.use(express.static(`${__dirname}/public`));

hbs.registerPartials(`${__dirname}/views/partials`, (err) => {});

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "tomÁs dE aQUino",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));

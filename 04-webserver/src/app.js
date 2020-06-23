const express = require("express");

const app = express();

app.use(express.static(`${__dirname}/public`));

/*
app.get("/", function (req, res) {
  res.send("Hello World");
});
*/

const port = 3000;

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));

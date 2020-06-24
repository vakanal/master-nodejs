const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json("Hello World");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Corriendo en el puerto ${port}`));

require("./config");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/user", (req, res) => {
  res.json("Get User");
});

app.post("/user", (req, res) => {
  let body = req.body;
  if (body.name === undefined) {
    res.status(400).json({
      ok: false,
      message: "Name is required",
    });
  } else {
    res.json({
      person: body,
      type: "Post User",
    });
  }
});

app.put("/user/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    id,
    type: "Put User",
  });
});

app.delete("/user", (req, res) => {
  res.json("Delete User");
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Corriendo en el puerto ${port}`));

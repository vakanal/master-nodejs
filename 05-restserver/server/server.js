require("./config");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const port = process.env.PORT;

mongoose
  .connect(
    "mongodb+srv://test:test@curso-nodejs-yrtj6.gcp.mongodb.net/coffee?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() =>
    app.listen(port, () => console.log(`Corriendo en el puerto ${port}`))
  )
  .catch((err) => console.log(err));

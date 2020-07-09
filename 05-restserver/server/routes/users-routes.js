const express = require("express");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const User = require("../models/users-models");

const app = express();

app.get("/user", (req, res) => {
  res.json("Get User");
});

app.post("/user", (req, res) => {
  const { name, email, password, role } = req.body;

  const user = new User({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
    role,
  });

  user.save((err, userDB) => {
    if (err) {
      res.status(400).json({
        ok: false,
        err,
      });
    } else {
      res.json({
        ok: true,
        user: userDB,
      });
    }
  });
});

app.put("/user/:id", (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ["name", "email", "img", "role", "status"]);

  User.findByIdAndUpdate(
    id,
    body,
    { new: true, runValidators: true },
    (err, userDB) => {
      if (err) {
        res.status(400).json({
          ok: false,
          err,
        });
      } else {
        res.json({
          ok: true,
          usuario: userDB,
        });
      }
    }
  );
});

app.delete("/user", (req, res) => {
  res.json("Delete User");
});

module.exports = app;

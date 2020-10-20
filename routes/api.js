var express = require("express");
var router = express.Router();
const User = require("../models/user");

router.get("/", function (req, res, next) {
  res.status(200);
  res.json({ message: "Hello World" });
});

router.post("/signup", (req, res, next) => {
  const user = new User({
    ...req.body,
  });
  user
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = router;

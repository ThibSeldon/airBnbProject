var express = require("express");
const { Mongoose } = require("mongoose");
const user = require("../models/user");
var router = express.Router();
const User = require("../models/user");

router.get("/", function (req, res, next) {
  res.status(200);
  res.json({ message: "Hello World" });
});

router.post("/signup", (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user != null) {
        res
          .status(409)
          .json({
            message:
              "eMail de l utilisateur deja present dans la Collection ....",
          });
        console.log(
          "eMail de l utilisateur deja present dans la Collection ...."
        );
      } else {
        User({
          ...req.body,
        })
          .save()
          .then((r) =>
            res
              .status(200)
              .json({
                role: r.role,
                first_name: r.first_name,
                last_name: r.last_name,
                email: r.email,
              })
          )
          .catch((e) => res.status(400).json(e));
        console.log("User Sauvegarder");
      }
    })
    .catch((error) => console.log(error));
});

router.delete("/user/delete/:id", (req, res, next) => {
  const id = req.params.id;

  User.deleteOne({ _id: id })
    .then(() => res.status(200).json({ message: "Objet effacé !" }))
    .catch((e) => res.status(400).json(e));
});

router.get("/user/liste", (req, res, next) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json(error));
});

router.get("/user/liste2", (req, res) => {
  User.find({}, "role first_name email -_id")
    .then((documents) => res.status(200).json(documents))
    .catch((error) => res.status(400).json(error));
});

module.exports = router;

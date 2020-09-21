// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.post("/api/linkup", (req, res) => {
    const {
      name,
      street,
      city,
      state,
      zipCode,
      linkUpDate,
      startTime,
      endTime,
      category
    } = req.body;
    req.body.UserId = req.user.id;
    db.LinkUp.create(req.body)
      .then(newLinkup => {
        console.log("newLINKUP---->", newLinkup);
        // res.redirect(307, "/viewEvents");
        res.sendStatus(200);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  app.get("/api/linkup/all", function(req, res) {
    db.LinkUp.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/linkup/category/:category", function(req, res) {
    db.LinkUp.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/linkup/UserId/:UserId", function(req, res) {
    db.LinkUp.findAll({
      where: {
        UserId: req.params.UserId
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.delete("/api/linkup/:id", function(req, res) {
    db.LinkUp.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  app.put("/api/linkup", function(req, res) {
    db.LinkUp.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });
};

const jwt = require("jwt-simple");
const passport = require("passport");
const secret = process.env.secret;
const fs = require("fs");
const path = require("path");

module.exports.auth = (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({
        err: true,
        message: "Укажите правильный логин и пароль"
      });
    }
    if (user) {
      const payload = {
        id: user.id
      };
      const token = jwt.encode(payload, secret);
      res.json({ err: false, token: token });
    }
  })(req, res, next);
};

module.exports.logout = (req, res, next) => {
  fs.readFile(path.join("config/config.json"), "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(
      /"secret": "\w*"/g,
      `"secret": "${Math.round(1000000 * Math.random())}"`
    );
    console.log("config/config.json", result);
    fs.writeFile(path.join("config/config.json"), result, "utf8", function(
      err
    ) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          err: true,
          message: "произошла ошибка"
        });
      }
      return res.json({
        err: false,
        message: "вы вышли из сессии"
      });
    });
  });
};

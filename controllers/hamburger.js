const path = require("path");

module.exports.getHamburger = (req, res, next) => {
  res.sendFile(
    path.resolve(__dirname, "../", "./public", "./hamburger", "index.html")
  );
};

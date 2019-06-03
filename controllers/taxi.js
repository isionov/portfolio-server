const path = require("path");

module.exports.getTaxi = (req, res, next) => {
  res.sendFile(
    path.resolve(__dirname, "../", "./public", "./taxi", "index.html")
  );
};

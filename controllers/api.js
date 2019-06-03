const path = require("path");

module.exports.getApi = (req, res, next) => {
  res.sendFile(
    path.resolve(__dirname, "../", "./public", "./api", "index.html")
  );
};

const path = require("path");

module.exports.getGeocomments = (req, res, next) => {
  res.sendFile(
    path.resolve(__dirname, "../", "./public", "./geocomments", "index.html")
  );
};

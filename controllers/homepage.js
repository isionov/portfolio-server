const path = require("path");

module.exports.getHomepage = (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "../", "./public", "index.html"));
};

const path = require("path");

module.exports.getFriends = (req, res, next) => {
  res.sendFile(
    path.resolve(__dirname, "../", "./public", "./friends", "index.html")
  );
};

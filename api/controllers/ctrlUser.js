const mongoose = require("mongoose");

module.exports.getUser = (req, res) => {
  const User = mongoose.model("user");
  User.findById(req.user.id).then(item => {
    res.json({ user: { id: item.id, name: item.name } });
  });
};

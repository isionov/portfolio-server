const mongoose = require("mongoose");
require("../models/user");

module.exports.reg = (req, res, next) => {
  console.log("before registration in ctrlReg", req);
  const { name, password } = req.body;
  //создаем экземпляр пользователя и указываем введенные данные
  const User = mongoose.model("user");
  User.findOne({ name }).then(u => {
    //если такой пользователь уже есть - сообщаем об этом
    if (u) {
      throw new Error("Такой пользователь уже существует!");
    }
    const adminUser = new User({ name });
    adminUser.setPassword(password);
    //если нет - добавляем пользователя в базу
    adminUser
      .save()
      .then(u => {
        return res.json({ msg: "Пользователь создан", user: u });
      })
      .catch(e => console.log(e));
  });
};

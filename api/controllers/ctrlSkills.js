const mongoose = require("mongoose");

module.exports.createSkill = (req, res) => {
  const { title, percent, category } = req.body;
  const Skills = mongoose.model("Skills");
  const item = new Skills({ title, percent, category, user_id: req.user.id });

  if (percent > 100 || percent < 0) {
    return res.status(400).json({ message: `Неверно указан уровень навыка` });
  }

  item
    .save()
    .then(item => {
      return res.status(201).json({ message: "Запись успешно добавлена" });
    })
    .catch(err => {
      res
        .status(400)
        .json({ message: `При добавлении произошла ошибка: ${err.message}` });
    });
};

module.exports.getSkills = (req, res) => {
  const Skills = mongoose.model("Skills");

  Skills.find().then(items => {
    res.status(200).json(items);
  });
};

module.exports.deleteSkill = (req, res) => {
  const Skills = mongoose.model("Skills");
  const id = req.params.id;

  Skills.findByIdAndRemove(id)
    .then(item => {
      if (!!item) {
        res.status(200).json({ message: "Запись успешно удалена" });
      } else {
        res.status(404).json({ message: "Запись не найдена" });
      }
    })
    .catch(err => {
      res
        .status(400)
        .json({ message: `При удалении произошла ошибка: ${err.message}` });
    });
};

module.exports.changeSkill = (req, res) => {
  const Skills = mongoose.model("Skills");
  const id = req.params.id;
  const data = {
    title: req.body.title,
    percent: req.body.title,
    category: req.body.title
  };
  if (percent > 100 || percent < 0) {
    return res.status(400).json({ message: `Неверно указан уровень навыка` });
  }

  Skills.findByIdAndUpdate(id, { $set: data })
    .then(item => {
      if (!!item) {
        res.status(200).json({ message: "Запись успешно изменена" });
      } else {
        res.status(404).json({ message: "Запись не найдена" });
      }
    })
    .catch(err => {
      res
        .status(400)
        .json({ message: `При изменении произошла ошибка: ${err.message}` });
    });
};

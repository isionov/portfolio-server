"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SkillsScheema = new Schema({
  title: { type: String, required: [true, "Укажите название навыка"] },
  percent: {
    type: Number,
    required: [true, "Укажите уровень навыка"],
    min: [0, "Не меньше 0"],
    max: [100, "Не больше 100"]
  },
  category: { type: String, required: [true, "Укажите id группы навыков"] },
  user_id: { type: String, required: [true, "Укажите id владельца"] }
});

// Просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model("Skills", SkillsScheema);

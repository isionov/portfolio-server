"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SkillCardsScheema = new Schema({
  title: { type: String, required: [true, "Укажите название группы навыков"] }
});

// Просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model("SkillCards", SkillCardsScheema);

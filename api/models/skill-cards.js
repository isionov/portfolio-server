"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SkillCardsScheema = new Schema({
  category: {
    type: String,
    required: [true, "Укажите название группы навыков"]
  },
  user_id: {
    type: String,
    required: [true, "Укажите id владельца"]
  }
});

// Просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model("SkillCards", SkillCardsScheema);

// user_id: { type: String, required: [true, "Укажите id пользователя"] }

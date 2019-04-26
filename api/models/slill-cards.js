"use strict";

const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  SkillCardsScheema = new Scheema({
    title: { type: String, required: [true, "Укажите название группы навыков"] }
  });

// Просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model("SkillCards", SkillCardsScheema);

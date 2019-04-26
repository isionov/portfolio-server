"use strict";

const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  WorksScheema = new Scheema({
    title: {
      type: String,
      required: [true, "Укажите название группы навыков"]
    },
    techs: { type: String, required: [true, "Укажите технологии"] },
    link: { type: String, required: [true, "Укажите ссылку"] },
    description: { type: String, required: [true, "Укажите описание"] },
    photo: { type: String, required: [true, "Загрузите фотографию"] }
  });

// Просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model("Works", WorksScheema);

"use strict";

const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  RevsScheema = new Schema({
    author: {
      type: String,
      required: [true, "Укажите имя автора"]
    },
    occ: { type: String, required: [true, "Укажите род деятельности"] },
    text: { type: String, required: [true, "Укажите описание"] },
    photo: { type: String, required: [true, "Загрузите фотографию"] },
    user_id: { type: String, required: [true, "Укажите id владельца"] }
  });

// Просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model("Revs", RevsScheema);

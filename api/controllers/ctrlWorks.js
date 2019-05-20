const mongoose = require("mongoose");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

module.exports.createWork = (req, res) => {
  const Works = mongoose.model("Works");
  const form = new formidable.IncomingForm();
  const upload = "public/upload/img";

  form.uploadDir = path.join(process.cwd(), upload);
  form.parse(req, function(err, fields, file) {
    const { title, techs, link, description } = fields;
    console.dir(file);
    console.dir(req);
    if (err) {
      return res
        .status(400)
        .json({ message: `При добавлении произошла ошибка: ${err.message}` });
    }
    if (!title || !techs || !link || !description || !file.photo) {
      if (file.photo) fs.unlink(file.photo.path);
      return res.status(400).json({
        message:
          "При добавлении произошла ошибка: необходимо заполнить все поля"
      });
    }

    const item = new Works({ title, techs, link, description, photo: upload });
    const fileName = upload + `/${item.id}.png`;
    const publicPathPhoto = "/upload/img" + `/${item.id}.png`;

    item.set("photo", publicPathPhoto);
    item
      .save()
      .then(item => {
        fs.rename(file.photo.path, fileName, function(err) {
          if (err) {
            console.log(err);
            fs.unlink(fileName);
            fs.rename(file.photo.path, fileName);
          }
        });

        return res.status(201).json({ message: "Запись успешно добавлена" });
      })
      .catch(err => {
        res
          .status(400)
          .json({ message: `При добавлении произошла ошибка: ${err.message}` });
      });
  });
};

module.exports.changeWork = (req, res) => {
  const Works = mongoose.model("Works");
  const form = new formidable.IncomingForm();
  const upload = "public/upload/img";
  const id = req.params.id;

  form.uploadDir = path.join(process.cwd(), upload);
  form.hash = "md5";
  form.parse(req, function(err, fields, file) {
    const { title, techs, link, description } = fields;
    const fileName = upload + `${id}.png`;

    if (err) {
      return res
        .status(400)
        .json({ message: `При добавлении произошла ошибка: ${err.message}` });
    }
    if (!title || !techs || !link || !description || !file.photo) {
      if (file.photo) fs.unlink(file.photo.path);
      return res.status(400).json({
        message:
          "При добавлении произошла ошибка: необходимо заполнить все поля"
      });
    }
    fs.rename(file.photo.path, fileName, function(err) {
      if (err) {
        console.log(err);
        fs.unlink(fileName);
        fs.rename(file.photo.path, fileName);
      }
    });

    Works.findByIdAndUpdate(id, { $set: { title, techs, link, description } })
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
  });
};

module.exports.deleteWork = (req, res) => {
  const Work = mongoose.model("Works");
  const id = req.params.id;
  const upload = "public/upload/img";
  const fileName = path.join(upload, `${id}.png`);

  Work.findByIdAndRemove(id)
    .then(item => {
      if (!!item) {
        fs.unlink(fileName, function(err) {
          if (!err) {
            res.status(200).json({ message: "Запись успешно удалена" });
          } else {
            res.status(400).json({
              message: `При удалении произошла ошибка: ${err.message}`
            });
          }
        });
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

module.exports.getWorks = (req, res) => {
  const Work = mongoose.model("Works");

  Work.find().then(items => {
    res.status(200).json({ works: items });
  });
};

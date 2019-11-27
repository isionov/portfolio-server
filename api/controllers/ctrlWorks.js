const mongoose = require("mongoose");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");
const upload = "public/upload/img/works";

module.exports.createWork = (req, res) => {
  const Works = mongoose.model("Works");
  const form = new formidable.IncomingForm();

  form.uploadDir = path.join(process.cwd(), upload);
  form.hash = "md5";
  form.parse(req, function(err, fields, file) {
    const { title, techs, link, description } = fields;

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

    const item = new Works({
      title,
      techs,
      link,
      description,
      user_id: req.user.id
    });

    const imageFile = fs.readFileSync(file.photo.path);
    const publicPathPhoto = Buffer.from(imageFile).toString("base64");

    item.set("photo", publicPathPhoto);
    item
      .save()
      .then(item => {
        fs.unlink(file.photo.path);

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
  const id = req.params.id;

  form.uploadDir = path.join(process.cwd(), upload);
  form.hash = "md5";

  form.parse(req, function(err, fields, file) {
    const { title, techs, link, description, photo } = fields;

    if (err) {
      return res
        .status(400)
        .json({ message: `При добавлении произошла ошибка: ${err.message}` });
    }
    if (!title || !techs || !link || !description || (!file.photo && !photo)) {
      if (file.photo) fs.unlink(file.photo.path);
      return res.status(400).json({
        message:
          "При добавлении произошла ошибка: необходимо заполнить все поля"
      });
    }

    Works.findById(id)
      .then(item => {
        if (!!item) {
          let publicPathPhoto;

          if (file.photo) {
            let imageFile = fs.readFileSync(file.photo.path);

            publicPathPhoto = Buffer.from(imageFile).toString("base64");
          }

          item.title = title;
          item.techs = techs;
          item.link = link;
          item.description = description;

          if (publicPathPhoto) {
            fs.unlink(file.photo.path, e => {
              console.log(e);
            });

            item.photo = publicPathPhoto;
          }

          item
            .save()
            .then(() => {
              res.status(200).json({ message: "Запись успешно изменена" });
            })
            .catch(err => {
              console.log(item);
              res.status(400).json({
                message: `При изменении произошла ошибка: ${err.message}`
              });
            });
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

  Work.findByIdAndRemove(id)
    .then(item => {
      if (!!item) {
        res.status(200).json({ message: "Запись удалена" });
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
    let changedArr = items.map(elem => {
      return {
        id: elem["_id"],
        user_id: elem["user_id"],
        title: elem["title"],
        techs: elem["techs"],
        link: elem["link"],
        description: elem["description"],
        photo: elem["photo"]
      };
    });
    res.status(200).json(changedArr);
  });
};

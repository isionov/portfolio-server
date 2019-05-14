const mongoose = require('mongoose');

module.exports.createSkillCard = (req, res)=>{
    const SkillCards = mongoose.model('SkillCards');
    const item = new SkillCards({title: req.body.title});
console.dir(req);
    item.save().then(item =>{
        return res.status(201).json({message: 'Запись успешно добавлена'});
    }).catch(err=>{res.status(400).json({message: `При добавлении произошла ошибка: ${err.message}`})})
}

module.exports.getSkillCards = (req, res)=>{
    const SkillCards = mongoose.model('SkillCards');

    SkillCards.find().then(items => {
        res.status(200).json({categories: items});
    })
}

module.exports.deleteSkillCard = (req, res)=>{
    const SkillCards = mongoose.model('SkillCards');
    const id = req.params.id;

    SkillCards.findByIdAndRemove(id)
    .then(item => {
        if(!!item){
            res.status(200).json({message: "Запись успешно удалена"});
        } else{
            res.status(404).json({message: "Запись не найдена"});
        }
    })
    .catch((err)=>{
        res.status(400).json({message: `При удалении произошла ошибка: ${err.message}`})
    })
}

module.exports.changeSkillCard = (req, res)=>{
    const SkillCards = mongoose.model('SkillCards');
    const id = req.params.id;
    const data = {
        title: req.body.title
    }

    SkillCards.findByIdAndUpdate(id, {$set: data})
    .then(item => {
        if(!!item){
            res.status(200).json({message: "Запись успешно изменена"});
        } else{
            res.status(404).json({message: "Запись не найдена"});
        }
    })
    .catch((err)=>{
        res.status(400).json({message: `При изменении произошла ошибка: ${err.message}`})
    })
}


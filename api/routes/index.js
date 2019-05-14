const express = require('express');
const router = express.Router();

const ctrlSkillCards = require('../controllers/ctrlSkillCards');

router.get('/categories', ctrlSkillCards.getSkillCards);
router.post('/categories', ctrlSkillCards.createSkillCard);
router.delete('/categories/:id', ctrlSkillCards.deleteSkillCard);
router.post('/categories/:id', ctrlSkillCards.changeSkillCard);

module.exports = router;
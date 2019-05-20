const express = require("express");
const router = express.Router();

const ctrlSkillCards = require("../controllers/ctrlSkillCards");
const ctrlSkills = require("../controllers/ctrlSkills");
const ctrlWorks = require("../controllers/ctrlWorks");

router.get("/categories", ctrlSkillCards.getSkillCards);
router.post("/categories", ctrlSkillCards.createSkillCard);
router.delete("/categories/:id", ctrlSkillCards.deleteSkillCard);
router.post("/categories/:id", ctrlSkillCards.changeSkillCard);

router.get("/skills", ctrlSkills.getSkills);
router.post("/skills", ctrlSkills.createSkill);
router.delete("/skills/:id", ctrlSkills.deleteSkill);
router.post("/skills/:id", ctrlSkills.changeSkill);

router.get("/works", ctrlWorks.getWorks);
router.post("/works", ctrlWorks.createWork);
router.post("/works/:id", ctrlWorks.changeWork);
router.delete("/works/:id", ctrlWorks.deleteWork);

module.exports = router;

const express = require("express");
const router = express.Router();

const ctrlSkillCards = require("../controllers/ctrlSkillCards");
const ctrlSkills = require("../controllers/ctrlSkills");
const ctrlWorks = require("../controllers/ctrlWorks");
const ctrlReg = require("../controllers/ctrlReg");
const ctrlAuth = require("../controllers/ctrlAuth");
const ctrlRevs = require("../controllers/ctrlRevs");

const passport = require("passport");
const auth = passport.authenticate("jwt", { session: false });

router.post("/register", ctrlReg.reg);
router.post("/login", ctrlAuth.auth);

router.get("/categories", ctrlSkillCards.getSkillCards);
router.post("/categories", auth, ctrlSkillCards.createSkillCard);
router.delete("/categories/:id", auth, ctrlSkillCards.deleteSkillCard);
router.post("/categories/:id", auth, ctrlSkillCards.changeSkillCard);

router.get("/skills", ctrlSkills.getSkills);
router.post("/skills", auth, ctrlSkills.createSkill);
router.delete("/skills/:id", auth, ctrlSkills.deleteSkill);
router.post("/skills/:id", auth, ctrlSkills.changeSkill);

router.get("/works", ctrlWorks.getWorks);
router.post("/works", auth, ctrlWorks.createWork);
router.post("/works/:id", auth, ctrlWorks.changeWork);
router.delete("/works/:id", auth, ctrlWorks.deleteWork);

router.get("/revs", ctrlRevs.getRevs);
router.post("/revs", auth, ctrlRevs.createRev);
router.post("/revs/:id", auth, ctrlRevs.changeRev);
router.delete("/revs/:id", auth, ctrlRevs.deleteRev);

module.exports = router;

const express = require("express");
const router = express.Router();
const homePage = require("../controllers/homepage");
/* GET home page. */
router.get("/", homePage.getHomepage);

module.exports = router;

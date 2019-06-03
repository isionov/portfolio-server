const express = require("express");
const router = express.Router();
const homePage = require("../controllers/homepage");
const api = require("../controllers/api");
const taxi = require("../controllers/taxi");
const geocomments = require("../controllers/geocomments");
const friends = require("../controllers/friends");
const hamburger = require("../controllers/hamburger");
/* GET home pages. */
router.get("/", homePage.getHomepage);
router.get("/api/", api.getApi);
router.get("/api/login", api.getApi);
router.get("/api/content/*", api.getApi);
router.get("/taxi/*", taxi.getTaxi);
router.get("/geocomments/*", geocomments.getGeocomments);
router.get("/friends/*", friends.getFriends);
router.get("/hamburger/*", hamburger.getHamburger);

module.exports = router;

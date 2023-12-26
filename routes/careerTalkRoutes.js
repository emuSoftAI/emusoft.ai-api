const express = require("express");
const {
  getCareerTalks,
  createCareerTalk,
  getCareerTalk,
  updateCareerTalk,
} = require("../controllers/careerTalkController");
const { checkId } = require("../controllers/general");

const router = express.Router();

router.route("/").get(getCareerTalks).post(createCareerTalk);

router.use(checkId);

router.route("/:id").get(getCareerTalk).patch(updateCareerTalk);

module.exports = router;

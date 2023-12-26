const express = require("express");

const {
  getTalks,
  createTalk,
  getTalk,
  updateTalk,
} = require("../controllers/talkController");

const { checkId } = require("../controllers/general");

const router = express.Router();

router.route("/").get(getTalks).post(createTalk);

router.use(checkId);

router.route("/:id").get(getTalk).patch(updateTalk);

module.exports = router;

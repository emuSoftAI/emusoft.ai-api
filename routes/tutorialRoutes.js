const express = require("express");

const {
  getTutorials,
  createTutorial,
  getTutorial,
  updateTutorial,
} = require("../controllers/tutorialController");

const { checkId } = require("../controllers/general");

const router = express.Router();

router.route("/").get(getTutorials).post(createTutorial);

router.use(checkId);

router.route("/:id").get(getTutorial).patch(updateTutorial);

module.exports = router;

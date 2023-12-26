const express = require("express");

const {
  getDirectors,
  createDirector,
  getDirector,
  updateDirector,
} = require("../controllers/directorController");

const { checkId } = require("../controllers/general");

const router = express.Router();

router.route("/").get(getDirectors).post(createDirector);

router.use(checkId);

router.get("/:id").get(getDirector).patch(updateDirector);

module.exports = router;

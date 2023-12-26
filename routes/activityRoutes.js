const express = require("express");

const {
  getActivities,
  createActivity,
  getActivity,
  updateActivity,
} = require("../controllers/activityController");
const { checkId } = require("../controllers/general");

const router = express.Router();

router.route("/").get(getActivities).post(createActivity);

router.use(checkId);

router.route("/:id").get(getActivity).patch(updateActivity);

module.exports = router;

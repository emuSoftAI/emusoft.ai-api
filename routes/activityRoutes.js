const express = require("express");

const {
  getActivities,
  createActivity,
  getActivity,
  updateActivity,
  checkActivityId,
} = require("../controllers/activityController");

const router = express.Router();

router.route("/").get(getActivities).post(createActivity);

router.use(checkActivityId);

router.route("/:id").get(getActivity).patch(updateActivity);

module.exports = router;

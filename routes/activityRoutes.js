const express = require("express");

const {
  getActivities,
  createActivity,
  getActivity,
  updateActivity,
  deleteActivity,
} = require("../controllers/activityController");

const { checkId } = require("../controllers/general");

const router = express.Router();

router.route("/").get(getActivities).post(createActivity);

// * Center Middleware
router.use(checkId);

router.route("/:id").get(getActivity).patch(updateActivity);
// .delete(deleteActivity);

module.exports = router;

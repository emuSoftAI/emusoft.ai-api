const express = require("express");
const {
  getActivities,
  createActivity,
  getActivity,
} = require("../controllers/activityController");

const router = express.Router();

router.route("/:id").get(getActivity);
router.route("/").get(getActivities).post(createActivity);

module.exports = router;

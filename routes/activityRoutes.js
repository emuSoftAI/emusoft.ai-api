const express = require("express");
const {
  getActivities,
  createActivity,
  getActivity,
} = require("../controllers/activityController");

const router = express.Router();

router.route("/").get(getActivities).post(createActivity);
router.get("/:id").get(getActivity);

module.exports = router;

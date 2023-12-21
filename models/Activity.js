const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const activitySchema = new Schema({
  title: Schema.String,
  description: Schema.String,
  images: [Schema.String],
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;

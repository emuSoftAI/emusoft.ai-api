const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // Schema design & data modeling for users
});

// * Creating model for users with 'unique' key
const User = mongoose.model("User", userSchema);

module.exports = User;

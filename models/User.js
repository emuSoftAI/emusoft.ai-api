const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // Schema design & data modeling for users
  firstname: {
    type: String,
    minlength: [2, "Firstname cannot be shorter than 2 characters."],
    maxlength: [16, "Firstname cannot be longer than 16 characters."],
    required: [true, "Firstname is required."],
    trim: true,
  },

  // implement lastname, username, department, email, password, passwordConfirm
  // or what else?

  // ...
});

// * Creating model for users with 'unique' key
const User = mongoose.model("User", userSchema);

module.exports = User;

const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    firstName: String,
    lastName: String,
  },
  role: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema);

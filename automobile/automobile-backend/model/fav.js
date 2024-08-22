const mongoose = require("mongoose");

const { Schema } = mongoose;

const favSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  car: {
    type: Schema.Types.ObjectId,
    ref: "Car",
  },
});

module.exports = mongoose.model("Fav", favSchema);

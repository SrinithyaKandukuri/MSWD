const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carSchema = new Schema({
  title: String,
  model: String,
  year: String,
  brand: String,
  price: Number,
  onRoadPrice: Number,
  fuelType: String,
  images: [String],
});

module.exports = mongoose.model("Car", carSchema);

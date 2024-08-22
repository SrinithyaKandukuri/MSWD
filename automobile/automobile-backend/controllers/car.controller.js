const mongoose = require("mongoose");
const Car = require("../model/cars");

module.exports.addCar = async (req, res) => {
  const { title, model, year, brand, price, onRoadPrice, fuelType, images } =
    req.body;

  if (
    !title ||
    !model ||
    !year ||
    !brand ||
    !price ||
    !onRoadPrice ||
    !fuelType ||
    !images
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newCar = await Car.create({
    title,
    model,
    year,
    brand,
    price,
    onRoadPrice,
    fuelType,
    images,
  });

  return res
    .status(201)
    .json({ message: "Car created successfully", data: newCar });
};

module.exports.updateCar = async (req, res) => {
  const { title, model, year, brand, price, onRoadPrice, fuelType, images } =
    req.body;

  if (
    !title ||
    !model ||
    !year ||
    !brand ||
    !price ||
    !onRoadPrice ||
    !fuelType ||
    !images
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newCar = await Car.findByIdAndUpdate(req.params.id, {
    title,
    model,
    year,
    brand,
    price,
    onRoadPrice,
    fuelType,
    images,
  });

  return res
    .status(201)
    .json({ message: "Car updated successfully", data: newCar });
};

module.exports.getCars = async (req, res) => {
  const { user_id } = req.query;
  let objectUserId = new mongoose.Types.ObjectId(user_id);
  console.log(objectUserId);
  // const aggreate = ;
  const cars = await Car.aggregate([
    {
      $lookup: {
        from: "favs",
        localField: "_id",
        foreignField: "car",
        as: "fav",
      },
    },
    {
      $addFields: {
        isFav: {
          $in: [objectUserId, "$fav.user"],
        },
      },
    },
  ]);

  return res.status(200).json({ data: cars });
};

module.exports.getCar = async (req, res) => {
  const car = await Car.findById(req.params.id);
  return res.status(200).json({ data: car });
};

module.exports.deleteCar = async (req, res) => {
  const car = await Car.findByIdAndDelete(req.params.id);
  return res.status(200).json({ message: "Car deleted successfully" });
};

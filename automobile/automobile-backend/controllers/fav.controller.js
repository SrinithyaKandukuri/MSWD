const Fav = require("../model/fav");

module.exports.getFavs = async (req, res) => {
  const { user_id } = req.body;
  const favs = await Fav.find({ user: user_id }).populate("car");
  return res.status(200).json({ data: favs });
};

module.exports.addFav = async (req, res) => {
  const { car_id, user_id } = req.body;

  if (!car_id || !user_id) {
    return res.status(400).json({ message: "All fields are required" });
  }

  let oldFav = await Fav.findOne({ car: car_id, user: user_id });

  if (oldFav) {
    const newFav = await Fav.findByIdAndDelete(oldFav._id);
    return res.status(200).json({ message: "Fav Deleted" });
  }

  const newFav = await Fav.create({
    car: car_id,
    user: user_id,
  });

  return res
    .status(201)
    .json({ message: "Fav created successfully", data: newFav });
};

module.exports.deleteFav = async (req, res) => {
  const { id } = req.params;

  if (!car_id || !user_id) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newFav = await Fav.findByIdAndDelete(id);

  return res.status(201).json({ message: "Fav deleted successfully" });
};

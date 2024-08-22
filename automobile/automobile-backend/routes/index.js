var express = require("express");
var router = express.Router();
const carRoute = require("./car.route");
const userRoute = require("./user.route");
const favRoute = require("./fav.route");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    message: "Welcome to the API",
  });
});

router.use("/car", carRoute);
router.use("/user", userRoute);
router.use("/fav", favRoute);

module.exports = router;

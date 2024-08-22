const express = require("express");
const favController = require("../controllers/fav.controller");

const router = express.Router();

router.get("/", favController.getFavs);
router.post("/", favController.addFav);
router.delete("/", favController.deleteFav);

module.exports = router;

const { Router } = require("express");
const route = Router();
const carController = require("../controllers/car.controller");
route.get("/", carController.getCars);

route.get("/:id", carController.getCar);

route.post("/", carController.addCar);

route.put("/:id", carController.updateCar);

route.delete("/:id", carController.deleteCar);

// route.put("/", carController.getCars);

// route.delete("/", carController.getCars);

module.exports = route;

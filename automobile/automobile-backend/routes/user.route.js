const { Router } = require("express");
var router = Router();
var userController = require("../controllers/user.controller");
/* GET users listing. */

router.get("/", userController.getUsers);
router.post("/", userController.addUser);
router.post("/login", userController.login);
router.post("/create", userController.creatUser);

module.exports = router;

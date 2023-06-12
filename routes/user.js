const express = require("express");

const userController = require("../controller/user-controller");

const router = express.Router();

router.get("/cart", userController.getCart);
router.get("/cart", userController.postCart);

module.exports = router;

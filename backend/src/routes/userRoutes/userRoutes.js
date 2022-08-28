const express = require("express");

const { registerUser } = require("../../controllers/userController/userController");

const router = express.Router();

router.route("/Users/registerUser").post(registerUser);



module.exports = router;


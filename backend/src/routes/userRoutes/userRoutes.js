const express = require("express");

const { registerUser, userLogin, getLoggedInUser } = require("../../controllers/userController/userController");
const { isAuthenticateUser } = require("../../middleware/auth");
const router = express.Router();

router.route("/Users/registerUser").post(registerUser);

router.route("/Users/login").post(userLogin);

router.route("/Users/getLoggedInUser").get(isAuthenticateUser, getLoggedInUser);

module.exports = router;


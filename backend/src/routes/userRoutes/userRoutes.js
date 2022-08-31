const express = require("express");

const { registerUser, userLogin, getLoggedInUser, logoutuser } = require("../../controllers/userController/userController");
const { isAuthenticateUser } = require("../../middleware/auth");
const router = express.Router();

router.route("/Users/registerUser").post(registerUser);

router.route("/Users/login").post(userLogin);

router.route("/Users/getLoggedInUser").get(isAuthenticateUser, getLoggedInUser);

router.route("/Users/logout").get(logoutuser);

module.exports = router;


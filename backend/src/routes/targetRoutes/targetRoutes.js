const express = require("express");

const { createTarget } = require("../../controllers/targetController/targetController");

const router = express.Router();

router.route("/Target/CreateTarget").post(createTarget);

module.exports = router;


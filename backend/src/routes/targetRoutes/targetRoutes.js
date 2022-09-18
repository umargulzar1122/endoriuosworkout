const express = require("express");

const { createTarget, getAllTargets } = require("../../controllers/targetController/targetController");

const router = express.Router();

router.route("/Target/CreateTarget").post(createTarget);
router.route("/Target/GetAllTargets").get(getAllTargets);

module.exports = router;


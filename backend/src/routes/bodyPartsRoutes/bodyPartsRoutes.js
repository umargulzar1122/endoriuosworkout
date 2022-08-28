const express = require("express");

const { createBodyPart } = require("../../controllers/bodyPartsController/bodyPartsController");

const router = express.Router();

router.post("/BodyParts/CreateBodypart", createBodyPart);

module.exports = router;
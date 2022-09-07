const express = require("express");

const { createBodyPart, getAllBodyparts } = require("../../controllers/bodyPartsController/bodyPartsController");

const router = express.Router();

router.post("/BodyParts/CreateBodypart", createBodyPart);
router.get("/BodyParts/GetAllBodyparts", getAllBodyparts);

module.exports = router;
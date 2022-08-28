const express = require("express");

const { createEquipment } = require("../../controllers/equipmentController/equipmentController");

const router = express.Router();

router.post("/Equipment/CreateEquipment", createEquipment);

module.exports = router;
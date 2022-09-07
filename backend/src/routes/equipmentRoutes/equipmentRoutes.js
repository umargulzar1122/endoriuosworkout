const express = require("express");

const { createEquipment, getAllEquipments } = require("../../controllers/equipmentController/equipmentController");

const router = express.Router();

router.post("/Equipment/CreateEquipment", createEquipment);
router.get("/Equipment/GetAllEquipments", getAllEquipments);

module.exports = router;
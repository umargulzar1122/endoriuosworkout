const express = require("express");
const { createBulkBodyParts, createBulkEquipments, createBulkTargets } = require("../../controllers/importdata/importdata");

const router = express.Router();

router.route("/CreateBulk/CreateBulkBodyParts").post(createBulkBodyParts);

router.route("/CreateBulk/CreateBulkEquipments").post(createBulkEquipments);


router.route("/CreateBulk/CreateBulkTargets").post(createBulkTargets);

module.exports = router;


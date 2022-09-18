const express = require("express");
const { createBulkBodyParts, createBulkEquipments, createBulkTargets, createAllExercises } = require("../../controllers/importdata/importdata");

const router = express.Router();

router.route("/CreateBulk/CreateBulkBodyParts").post(createBulkBodyParts);

router.route("/CreateBulk/CreateBulkEquipments").post(createBulkEquipments);


router.route("/CreateBulk/CreateBulkTargets").post(createBulkTargets);

router.route("/CreateBulk/CreateBulkExercises").post(createAllExercises);

module.exports = router;


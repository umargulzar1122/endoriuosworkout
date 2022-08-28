const express = require("express");

const { createExercise, getAllExercise } = require("../../controllers/exerciseController/exerciseController");

const router = express.Router();

router.route("/Exercise/createExercise").post(createExercise);

router.route("/Exercise/GetAllExercises").get(getAllExercise);

module.exports = router;


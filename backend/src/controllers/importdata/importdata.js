const Bodypart = require("../../model/exercises/bodyPartsModel");
const Equipment = require("../../model/exercises/equipmentModel");
const Target = require("../../model/exercises/targetModel");
const Exercise = require("../../model/exercises/exerciseModel");
exports.createBulkBodyParts = async (req, res, next) => {

	var bodyParts = req.body;
	for (let bodypart of bodyParts) {
		console.log(bodypart);
		await Bodypart.createBodyPart({ name: bodypart.charAt(0).toUpperCase() + bodypart.slice(1) });
	}
	res.status(200).json(bodyParts);
}

exports.createBulkEquipments = async (req, res, next) => {
	var equipments = req.body;
	for (let equipment of equipments) {
		console.log(equipment);
		await Equipment.createEquipment({ name: equipment.charAt(0).toUpperCase() + equipment.slice(1) });
	}
	res.status(200).json(equipments);
}

exports.createBulkTargets = async (req, res, next) => {
	var targets = req.body;
	for (let target of targets) {
		console.log(target);
		await Target.createTarget({ name: target.charAt(0).toUpperCase() + target.slice(1) });
	}
	res.status(200).json(targets);
}

exports.createAllExercises = async (req, res, next) => {
	try {

		var exercises = req.body;

		var exerciseObj = {};

		for (var exercise of exercises) {
			console.log("exercises", exercise);
			exerciseObj.name = exercise.name;
			exerciseObj.gifUrl = exercise.gifUrl;
			var bodyPart = await Bodypart.findOne({ name: { $regex: new RegExp(`^${exercise.bodyPart}$`), $options: 'i' } });
			//console.log("🚀 ~ file: importdata.js ~ line 43 ~ exports.createAllExercises= ~ bodyPart", bodyPart);
			exerciseObj.bodyPart = bodyPart.id;

			var equipment = await Equipment.findOne({ name: { $regex: new RegExp(`^${exercise.equipment}$`), $options: 'i' } });
			//console.log("🚀 ~ file: importdata.js ~ line 49 ~ exports.createAllExercises= ~ equipment", equipment);
			exerciseObj.equipment = equipment.id;

			var target = await Target.findOne({ name: { $regex: new RegExp(`^${exercise.target}$`), $options: 'i' } });
			//console.log("🚀 ~ file: importdata.js ~ line 52 ~ exports.createAllExercises= ~ target", target)
			exerciseObj.target = target.id;
			console.log("🚀 ~ file: importdata.js ~ line 53 ~ exports.createAllExercises= ~ exerciseObj", exerciseObj);

			var result = await Exercise.createExercise(exerciseObj);
			console.log("🚀 ~ file: importdata.js ~ line 58 ~ exports.createAllExercises= ~ result", result)

		}
		return res.status(200).json({ completed: true });
	} catch (error) {
		console.log("🚀 ~ file: importdata.js ~ line 58 ~ exports.createAllExercises= ~ error", error);
	}
}
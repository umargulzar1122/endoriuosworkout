const Bodypart = require("../../model/exercises/bodyPartsModel");
const Equipment = require("../../model/exercises/equipmentModel");
const Target = require("../../model/exercises/targetModel");

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
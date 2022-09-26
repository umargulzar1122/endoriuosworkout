const Exercise = require("../../model/exercises/exerciseModel");
var ObjectId = require('mongodb').ObjectId;

exports.createExercise = async (req, res, next) => {
	try {
		var result = await Exercise.createExercise(req.body);
		if (result.success) {
			return res.status(200).json(result);
		}
		return res.status(400).json(result);
	} catch (error) {
		return res.status(400).json({
			success: false,
			error: {
				name: error.name,
				message: error.message
			}
		});
	}
}

exports.getAllExercise = async (req, res, next) => {
	try {
		var query = req.query;
		//console.log("🚀 ~ file: exerciseController.js ~ line 24 ~ exports.getAllExercise= ~ query", query);
		var filterQuery = {};
		if (req.query["target"]) {
			filterQuery["target"] = ObjectId(req.query["target"]);
		}
		if (req.query["equipment"]) {
			filterQuery["equipment"] = ObjectId(req.query["equipment"]);
		}
		if (req.query["bodyPart"]) {
			filterQuery["bodyPart"] = ObjectId(req.query["bodyPart"]);
		}
		var result = await Exercise.getAllExercises({ ...filterQuery });
		return res.status(200).json(result);
	} catch (error) {
		return res.status(400).json({
			success: false,
			error: {
				name: error.name,
				message: error.message
			}
		});
	}
}
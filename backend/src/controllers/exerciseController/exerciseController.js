const Exercise = require("../../model/exercises/exerciseModel");

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
		var result = await Exercise.getAllExercises();
		console.log(result);
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
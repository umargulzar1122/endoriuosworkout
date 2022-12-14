const Target = require("../../model/exercises/targetModel");


exports.createTarget = async (req, res, next) => {
	try {
		var result = await Target.createTarget(req.body);
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


exports.getAllTargets = async (req, res, next) => {
	try {
		var result = await Target.getTargets();
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
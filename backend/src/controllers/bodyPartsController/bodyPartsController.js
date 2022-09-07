const BodyParts = require("../../model/exercises/bodyPartsModel");


exports.createBodyPart = async (req, res, next) => {
	try {
		var result = await BodyParts.createBodyPart(req.body);
		if (result.success) {
			return res.status(200).json(result);
		}
		return res.status(400).json(result);
	} catch (error) {
		return {
			success: false,
			error: {
				name: error.name,
				message: error.message
			}
		}
	}
}

exports.getAllBodyparts = async (req, res, next) => {
	try {
		var result = await BodyParts.getAllBodyparts();
		if (result.success) {
			return res.status(200).json(result);
		}
		return res.status(400).json(result);
	} catch (error) {
		return {
			success: false,
			error: {
				name: error.name,
				message: error.message
			}
		}
	}
}
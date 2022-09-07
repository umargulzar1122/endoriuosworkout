const Equipment = require("../../model/exercises/equipmentModel");


exports.createEquipment = async (req, res, next) => {
	try {
		var result = await Equipment.createEquipment(req.body);
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

exports.getAllEquipments = async (req, res, next) => {
	try {
		var result = await Equipment.getAllEqipments();
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
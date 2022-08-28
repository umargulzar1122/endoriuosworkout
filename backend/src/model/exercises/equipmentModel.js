const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter name"]
		},
		createAt: {
			type: Date,
			default: new Date().toString()
		}
	}
);

equipmentSchema.statics.createEquipment = async function (equipment) {
	try {
		if (!equipment.name) {
			return {
				success: false,
				error: {
					name: "namerequired",
					message: "Name is required"
				}
			}
		}
		var equipment = await this.create({ name: equipment.name });
		return {
			success: true,
			equipment
		}

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

module.exports = mongoose.model("Equipment", equipmentSchema);
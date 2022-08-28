const mongoose = require("mongoose");

const targetSchema = new mongoose.Schema(
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

targetSchema.statics.createTarget = async function (target) {
	try {
		if (!target.name) {
			return {
				success: false,
				error: {
					name: "namerequired",
					message: "Name is required"
				}
			}
		}
		var target = await this.create({ name: target.name });
		return {
			success: true,
			target
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

module.exports = mongoose.model("Target", targetSchema);
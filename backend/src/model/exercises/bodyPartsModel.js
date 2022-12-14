const mongoose = require("mongoose");

const bodyPartsSchema = new mongoose.Schema(
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

bodyPartsSchema.statics.createBodyPart = async function (bodyPart) {
	try {
		if (bodyPart.name) {
			var bodypart = await this.create({ name: bodyPart.name });
			return {
				success: true,
				bodypart
			}
		}
		return {
			success: false,
			error: {
				name: "namerequired",
				message: "Name is required"
			}
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

bodyPartsSchema.statics.getAllBodyparts = async function () {
	try {
		var bodyParts = await this.find();
		return {
			success: true,
			bodyParts
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

module.exports = mongoose.model("BodyParts", bodyPartsSchema);
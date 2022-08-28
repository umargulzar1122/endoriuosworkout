const mongoose = require("mongoose");
const BodyPart = require("./bodyPartsModel");
const Equipment = require("./equipmentModel");
const Target = require("./targetModel");

const exerciseSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter name"]
		},
		bodyPart: {
			type: mongoose.Schema.ObjectId,
			ref: BodyPart,//"bodypart",
			required: true
		},
		equipment: {
			type: mongoose.Schema.ObjectId,
			ref: Equipment,
			required: true
		},
		target: {
			type: mongoose.Schema.ObjectId,
			ref: Target,
			required: true
		},
		gifUrl: {
			type: String,
		},
		createAt: {
			type: Date,
			default: new Date().toString()
		}
	}
);

exerciseSchema.statics.createExercise = async function (exercise) {
	try {
		var exercise = await this.create(
			{
				name: exercise.name,
				bodyPart: exercise.bodyPart,
				equipment: exercise.equipment,
				target: exercise.target,
				gifUrl: exercise.gifUrl,
			});
		return { success: true, exercise };
	} catch (error) {
		return { success: true, error: { name: error.name, message: error.message } };

	}
}


exerciseSchema.statics.getAllExercises = async function () {
	try {
		var exercises = await this.find().populate(['bodyPart', 'equipment', 'target']).exec();
		return {
			success: true,
			exercises
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

module.exports = mongoose.model("Exercise", exerciseSchema);
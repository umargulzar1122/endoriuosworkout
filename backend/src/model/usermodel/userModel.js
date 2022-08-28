const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: [true, "Please enter your first name"],
			maxlength: [30, "First Name cannot exceed 30 characters"],
			minlength: [4, "First name should have more than 4 characters"]
		},
		lastName: {
			type: String,
			required: [true, "Please enter your first name"],
			maxlength: [30, "First Name cannot exceed 30 characters"],
			minlength: [4, "First name should have more than 4 characters"]
		},
		email: {
			type: String,
			required: [true, "Please provide your email"],
			unique: true,
			// validate: [validator.isEmail, "Please enter a valid email"],
		},
		password: {
			type: String,
			required: [true, "Please provide password"],
			minlength: [8, "Password should have more than 8 character"],
			select: false
		},
		role: {
			type: String,
			default: "user"
		},
		avatar: {
			public_id: {
				type: String,
				required: true
			},
			url: {
				type: String,
				required: true
			}
		}
	});

const createToken = (_id) => {
	return jwt.sign({ _id }, process.env.TOKEN_SECRET_KEY, { expiresIn: process.env.TOKEN_EXPIRES })
}


userSchema.statics.registerUser = async function (user) {
	try {

		if (!user.email) {
			return {
				success: false,
				error: { name: "emailempty", message: "Email required" }
			}
		}
		if (!user.password) {
			return {
				success: false,
				error: { name: "emailempty", message: "Password required" }
			}
		}

		if (!isEmail(user.email)) {
			return {
				success: false,
				error: { name: "invalidemail", message: "Please provide valid email address" }
			}
		}

		const isUserExist = await this.findOne({ email: user.email });
		if (isUserExist) {
			return {
				success: false,
				error: { message: "Email is already in use", name: "emailexist" }
			}
		}

		const salt = await bcrypt.genSalt(10);

		const hashPassword = await bcrypt.hash(user.password, salt);

		var user = await this.create(
			{
				firstName: user.firstName,
				email: user.email,
				role: "user",
				lastName: user.lastName,
				avatar: { public_id: "abc", url: "abc" },
				password: hashPassword
			});

		var token = createToken(user._id);
		return { success: true, user, token };
	} catch (error) {
		return {
			success: false,
			error: { name: error.name, message: error.message }
		}
	}
}

function isEmail(email) {
	var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	if (email !== '' && email.match(emailFormat)) { return true; }

	return false;
}

module.exports = mongoose.model("User", userSchema);
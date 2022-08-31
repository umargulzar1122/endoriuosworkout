const User = require("../../model/usermodel/userModel");
const setToken = require("../../utils/jwtToken");

exports.registerUser = async (req, res, next) => {
	try {
		var result = await User.registerUser(req.body);
		if (result.success) {
			const options = {
				httpOnly: true,
				expires: new Date(
					Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
				)
			};
			res.status(200).cookie("token", result.token, options).json({
				success: true,
				_id: result.user["_id"]
			});
			return;
		}
		res.status(400).json(result);
	} catch (error) {
		res.status(500).json({ success: false, error: { name: error.name, message: error.message } });
	}
}

exports.userLogin = async (req, res, next) => {
	try {
		var result = await User.userLogin(req.body);
		if (result.success) {
			setToken(result.user, 200, result.token, res);
		}
		res.status(400).json(result);
	} catch (error) {
		res.status(500).json({ success: false, error: { name: error.name, message: error.message } });
	}
}

exports.getLoggedInUser = async (req, res, next) => {
	res.status(200).json({
		success: true,
		user: req.user
	});
}
exports.logoutuser = async (req, res) => {
	try {
		/* This is setting the cookie to null. */
		res.cookie("token", null, {
			expires: new Date(Date.now()),
			httpOnly: true
		});
		/* This is a way to send a response to the user. It is sending a response to the user. */
		res.status(200).json({
			success: true,
			message: "Logout"
		});
	} catch (error) {
		/* This is a way to handle errors. It is a middleware that is used to handle errors. */
		return res.status(500).json({
			success: false,
			error: {
				name: error.name,
				message: error.message
			}
		});
	}
}
const User = require("../../model/usermodel/userModel");


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
		res.status(400).json({ success: false, error: { name: error.name, message: error.message } });
	}
}

exports.userLogin = async (rqe, res, next) => {

}
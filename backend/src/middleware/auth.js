
const jwt = require("jsonwebtoken");
const User = require("../model/usermodel/userModel");

exports.isAuthenticateUser = async (req, res, next) => {
	const { token } = req.cookies;
	if (!token) {
		return res.status(401).json(
			{
				success: false,
				error: {
					name: "unauthorized",
					message: "Please login to access this resource"
				}
			});
	}
	const decodedData = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
	req.user = await User.findById(decodedData.id);
	next();
}
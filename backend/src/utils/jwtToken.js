

const setToken = (user, statusCode, token, res) => {
	try {
		const options = {
			httpOnly: true,
			expires: new Date(
				Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
			)
		}
		res.status(statusCode).cookie("token", token, options).json({
			success: true,
			token,
			user
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			error
		});
	}
}

module.exports = setToken;

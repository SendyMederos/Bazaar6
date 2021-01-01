const jwt = require('jsonwebtoken')
const User = require('../models/User.js')

const jwt_config = {
	algorithm: "HS256",
	expiresIn: 20000,
};

const jwt_encryption_key = process.env.JWT_ENCRYPTION_KEY || "My encryption key";

console.log(process.env.JWT_ENCRYPTION_KEY)

const cookie = {
	cookie_name: "bazaar6_cookie",
	cookie_config: {
		maxAge: 24 * 60 * 60,
		httpOnly: true,
		secure: false,
	}
};

const validateUser = (req, res, next) => {
	if (req.originalUrl !== "/api/users/signup" && req.originalUrl !== "/api/users/login") {
		try {
			jwt.verify(req.cookies["bazaar6_cookie"], jwt_encryption_key)
			const decodedToken = jwt.decode(req.cookies["bazaar6_cookie"], jwt_encryption_key)
			console.log(decodedToken.user._id)
			req.user_id = decodedToken.user._id
			next()
		}
		catch (err) {
			console.log(err.message)
			res.status(401).send("Unauthorized")
		}
	} else {
		next()
	}
}

module.exports = {
	validateUser,
	jwt_config,
	jwt_encryption_key,
	cookie
}
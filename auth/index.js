const jwt = require('jsonwebtoken')
const User = require('../models/User.js')
const _ = require("lodash")

const publicRoutes = [
	"/api/users/signup",
	"/api/users/login"
]

const jwt_config = {
	algorithm: "HS256",
	expiresIn: "1h",
};

const jwt_encryption_key = process.env.JWT_ENCRYPTION_KEY || "My encryption key";

const cookie = {
	cookie_name: "bazaar6_cookie",
	cookie_config: {
		maxAge: 24 * 60 * 60 * 60,
		httpOnly: true,
		secure: false,
	}
};

function validateUser (req, res, next) {

	let isUploadRequest = req.originalUrl.startsWith("/uploads")
	let isPublicRoute = _.includes(publicRoutes, req.originalUrl)

	if (isPublicRoute || isUploadRequest) {
		next()
	} else {
		try {
			jwt.verify(req.cookies["bazaar6_cookie"], jwt_encryption_key)
			const decodedToken = jwt.decode(req.cookies["bazaar6_cookie"], jwt_encryption_key)
			req.user_id = decodedToken.user._id
			next()
		}
		catch (err) {
			console.log(err.message)
			res.status(401).send("Unauthorized")
		}
	}
}

module.exports = {
	validateUser,
	jwt_config,
	jwt_encryption_key,
	cookie
}
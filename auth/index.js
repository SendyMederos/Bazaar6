const jwt = require('jsonwebtoken')
const User = require('../models/User.js')

const jwt_config = {
	algorithm: "HS256",
	expiresIn: 20000,
};

const jwt_encryption_key = process.env.JWT_ENCRYPTION_KEY || "My encryption key";

console.log(process.env.JWT_ENCRYPTION_KEY)

const cookie = {
	cookie_name: "bazaar6-cookie",
	cookie_config: {
		maxAge: 24 * 60 * 60,
		httpOnly: true,
		secure: false,
	}
};

function getUserCredentials(user) {
	const token = jsonwebtoken.sign({ user }, jwt_encryption_key, jwt_config);
	const cookie = { cookie_name, cookie_config };
	return { token, cookie };
};
// res.cookie(cookie.cookie_name, token, { ...cookie.cookie_config });
// res.status(200).send({
// 	user: uiUser,
// 	message: { content: "Successfully retreived user" },
// });

module.exports = {
	getUserCredentials,
	jwt_config,
	jwt_encryption_key,
	cookie
}
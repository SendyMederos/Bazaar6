const db = require("../models")
const auth = require('../auth')
const jwt = require('jsonwebtoken')

const jwt_config = {
    algorithm: "HS256",
    expiresIn: "1h",
};

const jwt_encryption_key = process.env.JWT_ENCRYPTION_KEY || "My encryption key";

const authCookie = {
    cookie_name: "bazaar6_cookie",
    cookie_config: {
        maxAge: 24 * 60 * 60 * 60,
        httpOnly: true,
        secure: false,
    }
};

const getUserCredentials = (user) => {

    // Sign the JWT with out encryption key and deliver the user object
    const token = jwt.sign({ user }, jwt_encryption_key, jwt_config);

    // Prepare the client authentication cookie
    const cookie = { cookie_name: authCookie.cookie_name, cookie_config: authCookie.cookie_config };

    return { token, cookie };
};

module.exports = {
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User
            .findById({ _id: req.user_id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateBudget: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.user_id },
                {
                    budget: parseInt(req.body.budget)
                })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.user._id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createUser: async (req, res) => {
        try {

            // Try to create the User in MongoDB
            const createdUser = await db.User.create({
                ...req.body.user
            });

            // Assemble a client authentication cooke and JSON Web Token
            const { cookie, token } = getUserCredentials(createdUser);

            // Send the cookie back to the requesting client
            res.cookie(cookie.cookie_name, token, { ...cookie.cookie_config });

            // Mark the response as successful and send back the user object
            res.status(201).send({
                user: { createdUser },
                message: { content: "Successfully created user" },
            });

        } catch (error) {

            // Mark the response as unsuccessful and send back the error
            res.status(500).send({
                message: {
                    error: "An error occurred creating user",
                    info: error.message,
                },
            });

        }
    },
    login: async (req, res) => {
        try {

            // Try to locate the user from the database
            const foundUser = await db.User.findOne({
                email: req.body.email,
                password: req.body.password
            });

            // If the user isn't found, immediate break execution
            // and return an error message
            if (foundUser == null) {

                res.status(404)
                res.json({
                    message: {
                        content: "The username or password you entered does not match our records"
                    }
                })

                return
            }

            // Assemble a client authentication cooke and JSON Web Token
            const { cookie, token } = getUserCredentials(foundUser);

            // Send the cookie back to the requesting client
            res.cookie(cookie.cookie_name, token, { ...cookie.cookie_config });

            // Mark the response as successful and send back the user object
            res.status(201).send({
                user: { findUser: foundUser },
                message: { content: "Successfully logged in" },
            });

        } catch (error) {

            // Mark the response as unsuccessful and send back the error
            res.status(500).send({
                message: {
                    error: "An error occurred logging in",
                    info: error.message,
                },
            });

        }
    }
}

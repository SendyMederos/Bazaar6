const db = require("../models")
const jwtDecode = require('jwt-decode')
const auth = require('../auth')
const signToken = auth.signToken
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const jwt_config = {
    algorithm: "HS256",
    expiresIn: 20000,
};

const jwt_encryption_key = process.env.JWT_ENCRYPTION_KEY || "My encryption key";

const authCookie = {
    cookie_name: "bazaar6_cookie",
    cookie_config: {
        maxAge: 24 * 60 * 60,
        httpOnly: true,
        secure: false,
    }
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
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateBudget: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.user_id },
                {
                    setBudget: parseInt(req.body.budget)
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
            const createdUser = await db.User.create({
                ...req.body.user
            });
            const getUserCredentials = (user) => {
                const token = jwt.sign({ user }, jwt_encryption_key, jwt_config);
                const cookie = { cookie_name: authCookie.cookie_name, cookie_config: authCookie.cookie_config };
                return { token, cookie };
            };
            const { cookie, token } = getUserCredentials(createdUser);
            // const removeUser = async () => {
            //     await db.User
            //         .findById({ _id: createdUser._id })
            //         .then(dbModel => dbModel.remove())
            //         .catch(err => res.status(422).json(err));
            // }
            // await removeUser()
            res.cookie(cookie.cookie_name, token, { ...cookie.cookie_config });
            res.status(201).send({
                user: { createdUser },
                message: { content: "Successfully created user" },
            });
        } catch (error) {
            res.status(500).send({
                message: {
                    content: "An error occured creating user",
                    info: error.message,
                },
            });
        }
    },
    login: async (req, res) => {
        try {
            const findUser = await db.User.findOne({
                email: req.body.email,
                password: req.body.password
            });
            const getUserCredentials = (user) => {
                const token = jwt.sign({ user }, jwt_encryption_key, jwt_config);
                const cookie = { cookie_name: authCookie.cookie_name, cookie_config: authCookie.cookie_config };
                return { token, cookie };
            };
            const { cookie, token } = getUserCredentials(findUser);
            res.cookie(cookie.cookie_name, token, { ...cookie.cookie_config });
            res.status(201).send({
                user: { findUser },
                message: { content: "Successfully logged in" },
            });
        } catch (error) {
            res.status(500).send({
                message: {
                    content: "An error occured logging in",
                    info: error.message,
                },
            });
        }
    }
}
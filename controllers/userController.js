const db = require("../models")
const jwtDecode = require('jwt-decode')
const auth = require('../auth')
const signToken = auth.signToken
const jwt = require('jsonwebtoken')
const jwt_encryption_key = auth.jwt_encryption_key
const jwt_config = auth.jwt_config
const authCookie = auth.cookie

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
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    authenticate: (req, res) => {
        db.User.findOne({ email: req.body.email }, (err, user) => {
            if (!user || !user.validPassword(req.body.password)) {
                return res.json({ success: false, message: "Invalid credentials." })
            }
            const token = signToken(user)
            res.json({ success: true, message: "Token attached.", token })
        })
    },
    createUser: async (req, res) => {
        try {
            const createdUser = await db.User.create({
                ...req.body
            });
            const getUserCredentials = (user) => {
                const token = jwt.sign({ user }, jwt_encryption_key, jwt_config);
                const cookie = { cookieName: authCookie.cookie_name, cookieConfig: authCookie.cookie_config };
                return { token, cookie };
            };
            const { cookie, token } = getUserCredentials(createdUser);
            res.cookie(cookie.cookieName, token, { ...cookie.cookieConfig });
            res.status(201).send({
                user: { createdUser },
                message: { content: "Successfully created user" },
            });
            res.status(201).send("HEYYYY IT WORKED")
        } catch (error) {
            res.status(500).send({
                message: {
                    content: "An error occured creating user",
                    info: error.message,
                },
            });
        }
    }
}
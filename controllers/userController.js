const db = require("../models")
const jwtDecode = require('jwt-decode')
const signToken = require('../auth').signToken

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
    create: function (req, res) {
        db.User
            .create(req.body)
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
		db.User.findOne({email: req.body.email}, (err, user) => {
			if(!user || !user.validPassword(req.body.password)) {
				return res.json({success: false, message: "Invalid credentials."})
			}
			const token = signToken(user)
			res.json({success: true, message: "Token attached.", token})
		})
    },
    show: async (req, res) => {
		let userProfile = jwtDecode(req.params.id)		
		let joke = jokes[Math.floor(Math.random() * jokes.length)]
		let doc = await User.find({email: userProfile.email}).lean()		
		doc[0].joke = joke						
		res.json(doc)
	}
};
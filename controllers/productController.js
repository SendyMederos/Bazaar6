const db = require("../models")

module.exports = {
    findAll: function (req, res) {
        db.Product
            .find({})
            .sort({ category: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByCategory: function (req, res) {
        try{
        console.log(req.params.category)
        db.Product
            .find({ category: req.params.category})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        } catch {
            console.log("ERR")
        }
    },
    findById: function (req, res) {
        db.Product
            .findById(req.user_id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Product
            .create(req.user_id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Product
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Product
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
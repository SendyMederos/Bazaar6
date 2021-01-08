const db = require("../models")

module.exports = {
    getAds: function (req, res) {
        db.Wanted
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Wanted
            .findById(req.user_id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    postAd: function (req, res) {
        db.Wanted
            .create(req.body)
            .then(({ _id }) => db.User.findOneAndUpdate({_id: req.user_id}, { $addToSet: { wantedPosts: _id }}))
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Wanted
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Wanted
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
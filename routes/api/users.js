const router = require("express").Router();
const userController = require("../../controllers/userController");
const verifyToken = require('../../auth').verifyToken

router.route("/")
    .get(userController.findAll)
    .post(userController.createUser);

router.route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);

router.route('/authenticate')
    .post(userController.authenticate)

module.exports = router;

const router = require("express").Router();
const userController = require("../../controllers/userController");
const verifyToken = require('../../auth').verifyToken

router.route("/")
    .get(userController.findAll)

router.route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);

router.route('/signup')
    .post(userController.createUser)

module.exports = router;

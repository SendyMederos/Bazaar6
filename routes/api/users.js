const router = require("express").Router();
const userController = require("../../controllers/userController");
const verifyToken = require('../../auth').verifyToken

router.route("/")
    .get(userController.findAll)
    .post(userController.create);

router.route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);

router.route('/authenticate')
    .post(userController.authenticate)

router.route('/secret')
    .get(userController.show)

router.use(verifyToken)

module.exports = router;

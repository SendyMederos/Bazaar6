const router = require("express").Router();
const userController = require("../../controllers/userController");
const verifyToken = require('../../auth').verifyToken

router.route("/")
    .get(userController.findAll)

router.route("/:id")
    .get(userController.findById)
    //.put(userController.update)
    .delete(userController.remove);

router.route('/signup')
    .post(userController.createUser)

router.route('/login')
    .post(userController.login)

router.route("/budget")
    .put(userController.updateBudget)
    .get(userController.getBudget)

module.exports = router;

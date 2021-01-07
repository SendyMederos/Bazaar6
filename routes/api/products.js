const router = require("express").Router();
const productController = require("../../controllers/productController");

router.route("/")
    .post(productController.create)
    .get(productController.findAll);

router.route("/:id")
    .get(productController.findById)
    .put(productController.update)
    .delete(productController.remove);

module.exports = router;

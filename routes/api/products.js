const router = require("express").Router();
const productController = require("../../controllers/productController");

router.route("/")
    .post(productController.create);

router.route("/:category")
    .get(productController.findByCategory)

router.route("/:id")
    .get(productController.findById)
    .put(productController.update)
    .delete(productController.remove);

module.exports = router;

const router = require("express").Router();
const postController = require("../../controllers/postController");

router.route("/")
    .get(orderController.findAll)
    .post(postController.create);

router.route("/:id")
    .get(postController.findById)
    .put(postController.update)
    .delete(postController.remove);

module.exports = router;

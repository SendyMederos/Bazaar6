const router = require("express").Router();
const userRoutes = require("./users");
const productRoutes = require("./products");
const orderRoutes = require("./orders")
const postRoutes = require("./posts")

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);
router.use("/posts", postRoutes);

module.exports = router;
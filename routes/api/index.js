const router = require("express").Router();
const userRoutes = require("./users");
const productRoutes = require("./products");
const orderRoutes = require("./orders")
const postRoutes = require("./posts")
const wantedRoutes = require("./wanted")

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);
router.use("/posts", postRoutes);
router.use("/wanted", wantedRoutes)

module.exports = router;
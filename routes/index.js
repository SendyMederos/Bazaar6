const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/index");
const blobRoutes = require("./blob")
const uploadRoutes = require("./api/upload")

// API Routes
router.use("/api", apiRoutes);
router.use("/blob", blobRoutes)
router.use("/upload", uploadRoutes)

module.exports = router;
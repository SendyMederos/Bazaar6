const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/index");
const uploadRoutes = require("./api/upload")

// API Routes
router.use("/api", apiRoutes);
router.use("/uploads", uploadRoutes)

module.exports = router;
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/index");
const uploadRoutes = require("./api/upload")

// API Routes
router.use("/api", apiRoutes);
router.use("/uploads", uploadRoutes)
router.get("/logout", function(req, res) {
    res.clearCookie('bazaar6_cookie')
    return res.sendStatus(200);
})

module.exports = router;
const router = require("express").Router();
const apiRoutes = require("./api/index");

// API Routes
router.use("/api", apiRoutes);
router.get("/logout", function(req, res) {
    res.clearCookie('bazaar6_cookie')
    return res.sendStatus(200);
})

module.exports = router;
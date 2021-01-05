const router = require("express").Router()
const fs = require("fs")
const path = require("path")
const uploadsPath = path.resolve(__dirname, `../../uploads`);

router.get("/", async (req, res) => {

})

router.post("/", async (req, res) => {

	let payload = req.body
	let filename = "something.tiff"

	let filepath = path.resolve(uploadsPath, filename)

	if (payload != null && typeof payload === "object" && payload.length > 0) {
		fs.writeFileSync(filepath, payload)
		//await blobService.put("something.tiff", payload)
	}

})


module.exports = router

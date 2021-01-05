const router = require("express").Router()
const fs = require("fs")
const path = require("path")
const {UploadsPath} = require("../../utils/constants");

/**
 * Retrieves the name of the file from the query string and saves it to the local /uploads directory
 */
router.post("/", async (req, res) => {

	// Retrieve the payload from the request
	let payload = req.body
	let filename = req.header("X-Bazaar-Filename")

	// TODO: If necessary, rename the file before saving it to disk

	// Determine the absolute path of the final save target
	let filepath = path.resolve(UploadsPath, filename)

	// Ensure we're only saving actual buffer data to the filesystem
	if (payload != null && Buffer.isBuffer(payload) && payload.length > 0) {

		try {
			await new Promise((resolve, reject) => {
				fs.writeFile(filepath, payload, (err) => {

					if (err) {
						reject(err)
					} else {
						resolve()
					}

				})
			})
		} catch (e) {

			res.status(500)
			res.json({
				success: false,
				reason: e.message
			})

			return

		}

	}

	// Create a record of the upload in Mongo utilizing the username of
	// the user who uploaded the file as well as info from the form
	// that the user filled out.
	// TODO: Record the transaction in Mongo

	res.json({
		success: true
	})

})

module.exports = router

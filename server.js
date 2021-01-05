const express = require("express");
const fs = require("fs")
const path = require("path");
const logger = require("morgan")
const mongoose = require("mongoose");

const bodyParser = require("body-parser")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const createError = require("http-errors")

const validateUser = require('./auth').validateUser
const routes = require("./routes");

const {UploadsPath} = require("./utils/constants")

require('dotenv').config({
	silent: true
});

//require('./auth')

const app = express();

if (!fs.existsSync(UploadsPath)) {
	fs.mkdirSync(UploadsPath)

}

/////////////////////////////////////////////// Middleware ///////////////////////////////////////////////

// Log Every Request
app.use(logger("dev"))

// Parsing JSON Payload to req.body
app.use(express.json());

// Parsing URL Encoded POSTs to req.body
app.use(express.urlencoded({extended: true}));

// Parsing Image Buffers to req.body
app.use(bodyParser.raw({type: "application/octet-stream", limit: "100mb"}))
app.use(bodyParser.raw({type: "image/jpeg", limit: "100mb"}))
app.use(bodyParser.raw({type: "image/tiff", limit: "100mb"}))

// Parsing Cookies to req.cookie
app.use(cookieParser())

// Enabling Cors Config
app.use(cors({
	credentials: true,
	origin: ["http://localhost:3000"],
}))

// Static Asset Handling for Image Upload
app.use("/uploads", express.static("uploads"))

//app.use(validateUser)
app.use(routes)

// Static Asset Handling for React App
if (process.env.NODE_ENV === "production") {

	app.use(express.static("client/build"));

	// If no API routes are hit, send the React app
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname, "client/build/index.html"));
	});

}

// Catch 404s and forward them to the error handler
app.use(function (req, res, next) {
	next(createError(404))
})

// Final Error Handler
app.use(function (err, req, res, next) {

	// Set locals, which only provide additional error information during development
	res.locals.message = err.message
	res.locals.error = process.env.NODE_ENV === "production" ? {} : err;

	res.status(err.status || 500);
	res.json(res.locals.error)

})

/////////////////////////////////////////////// End of Middleware ///////////////////////////////////////////////

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bazaar6", {useNewUrlParser: true});

// Export the Application
module.exports = app

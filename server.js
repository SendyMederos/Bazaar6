const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// connect to routes
app.use(routes);

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "");

// start the server
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});

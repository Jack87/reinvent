
const path = require("path");

// Environmental Variables
require('dotenv').config({path: path.join(__dirname, '.env')})

const express = require("express");
const mongoose = require("mongoose");

// const db = require("./models");
const passport = require("passport");

// Port
const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express();

const routes = require("./routes");


// Passport Middleware
app.use(passport.initialize());

// Passport Configuration
require("./config/passport")(passport);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Define middleware here
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

// Connect to DataBase
mongoose
	.connect(process.env.MONGODB_URI || "mongodb://localhost/reniventdb", { useNewUrlParser: true })
	.then(console.log("Connected to MongoDB!"));


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
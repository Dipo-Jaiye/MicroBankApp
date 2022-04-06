// Import the dependencies
const express = require("express");
const db = require("./db");
const routes = require("./routes");
const {port, PORT} = process.env;

// Initialize the app
const app = express();
const appPort = port ?? PORT ?? "8080";

// Initialize the db

// Add middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Add routes
app.use("/api/v1", routes);

// Start the server
app.listen(appPort, () => console.log(`App running on port ${appPort}`));
const express = require("express");
const promptController = require("../controllers/prompt-controller");

const routes = express.Router();

routes.post("api/prompt", promptController.sendText);
console.log("routes");


module.exports = routes;

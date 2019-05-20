const express = require("express");
const routes = express.Router();
const MainController = require("./app/controllers/MainController");
const checkAgeMiddleware = require("./app/middleware/checkAge");

routes.get("/", MainController.index);
routes.post("/check", MainController.check);
routes.get("/major", checkAgeMiddleware, MainController.major);
routes.get("/minor", checkAgeMiddleware, MainController.minor);

module.exports = routes;

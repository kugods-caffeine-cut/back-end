const RootRouter = require("express").Router();
const RootController = require("../controllers/rootController");
const {apiRouter} = require("./apiRouter");
const {swaggerUi, specs} = require("../config/swagger");
const AuthController = require("../controllers/authController");

RootRouter.get("/", RootController.getHome);
RootRouter.use("/api", AuthController.checkToken, apiRouter);
RootRouter.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

module.exports = {RootRouter};

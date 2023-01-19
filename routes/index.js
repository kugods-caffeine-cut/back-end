const RootRouter = require("express").Router();
const RootController = require("../controllers/rootController");
const {apiRouter} = require("./apiRouter");
const {swaggerUi, specs} = require("../config/swagger");

RootRouter.get("/", RootController.getHome);
RootRouter.use("/api", apiRouter);
RootRouter.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

module.exports = {RootRouter};

const rootRouter = require("express").Router();
const RootController = require("../controllers/rootController");
const {apiRouter} = require("./apiRouter");
const {swaggerUi, specs} = require("../config/swagger");

rootRouter.get("/", RootController.getHome);
rootRouter.use("/api", apiRouter);
rootRouter.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

module.exports = {rootRouter};

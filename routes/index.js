const rootRouter = require("express").Router();
const RootController = require("../controllers/rootController");
const {apiRouter} = require("./apiRouter");

rootRouter.get("/", RootController.getHome);
rootRouter.use("/api", apiRouter);

module.exports = {rootRouter};

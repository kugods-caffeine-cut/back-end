const RootRouter = require("express").Router();
const RootController = require("../controllers/rootController");
const {apiRouter} = require("./apiRouter");

RootRouter.get("/", RootController.getHome);
RootRouter.use("/api", apiRouter);

module.exports = {RootRouter};

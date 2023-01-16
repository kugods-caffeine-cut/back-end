const rootRouter = require("express").Router();
const RootController = require("../controllers/rootController");
const {apiDrinkRouter} = require("./apiDrinkRouter");
const {apiLogRouter} = require("./apiLogRouter");
const {apiUserRouter} = require("./apiUserRouter");

rootRouter.get("/", RootController.getHome);
rootRouter.use("/api/drink", apiDrinkRouter);
rootRouter.use("/api/log", apiLogRouter);
rootRouter.use("/api/user", apiUserRouter);

module.exports = {rootRouter};

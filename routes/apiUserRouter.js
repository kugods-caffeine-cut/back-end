const apiUserRouter = require("express").Router();
const apiUserController = require("../controllers/apiUserController");

apiUserRouter.get("/favorite/:userId", apiUserController.getFavoriteDrinks);

module.exports = {apiUserRouter};

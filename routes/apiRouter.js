const apiRouter = require("express").Router();
const DrinkController = require("../controllers/drinkController");
const UserController = require("../controllers/userController");
const LogController = require("../controllers/logController");

apiRouter.get("/drink", DrinkController.getAllDrinks);
apiRouter.get("/drink/:drinkId", DrinkController.getOneDrink);
apiRouter.post("/drink", DrinkController.createOneDrink);
//apiRouter.patch("/drink/:drinkID", DrinkController.patchOneDrink);
//apiRouter.delete("/drink/:drinkID", DrinkController.deleteOneDrink);
apiRouter.get("/drink/search/:searchKeyword", DrinkController.getSearchDrink);

apiRouter.get("/log", LogController.getAllLogs);
apiRouter.get("/log/:logId", LogController.getOneLog);
apiRouter.post("/log", LogController.createOneLog);
apiRouter.delete("/log/:logId", LogController.deleteOneLog);

apiRouter.get("/user/", UserController.getAllUser);
apiRouter.get("/user/:userId", UserController.getOneUser);
apiRouter.get("/user/favorite/:userId", UserController.getFavoriteDrinks);
apiRouter.get("/user/log/:userId", UserController.getUserLogs);
apiRouter.post("/user", UserController.createOneUser);
apiRouter.delete("/user/:userId", UserController.deleteOneUser);

module.exports = {apiRouter};

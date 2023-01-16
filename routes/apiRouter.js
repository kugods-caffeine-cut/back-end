const apiRouter = require("express").Router();
const DrinkController = require("../controllers/drinkController");
const UserController = require("../controllers/userController");

apiRouter.get("/drink", DrinkController.getAllDrinks);
apiRouter.get("/drink/:drinkId", DrinkController.getOneDrink);
apiRouter.post("/drink", DrinkController.postDrink);
//apiRouter.patch("/drink/:drinkID", DrinkController.patchDrink);
//apiRouter.delete("/drink/:drinkID", DrinkController.deleteDrink);
apiRouter.get("/drink/search/:searchKeyword", DrinkController.getSearchDrink);

apiRouter.get("/log", DrinkController.getAllLogs);
apiRouter.get("/log/:logId", DrinkController.getOneLog);
apiRouter.post("/log", DrinkController.postLog);
apiRouter.get("/favorite/:userId", DrinkController.getFavoriteDrinks);

apiRouter.get("/user/", UserController.getAllUser);
apiRouter.get("/user/:userId", UserController.getOneUser);
apiRouter.post("/user", UserController.createOneUser);
apiRouter.delete("/user/:userId", UserController.deleteOneUser);

module.exports = {apiRouter};

const apiRouter = require("express").Router();
const DrinkController = require("../controllers/apiController");

apiRouter.get("/drink", DrinkController.getAllDrinks);
apiRouter.get("/drink/:drinkID", DrinkController.getOneDrink);
apiRouter.post("/drink", DrinkController.postDrink);
//apiRouter.patch("/drink/:drinkID", DrinkController.patchDrink);
//apiRouter.delete("/drink/:drinkID", DrinkController.deleteDrink);
apiRouter.get("/drink/search/:searchKeyword", DrinkController.getSearchDrink);

apiRouter.get("/log", DrinkController.getAllLogs);
apiRouter.get("/log/:logID", DrinkController.getOneLog);
apiRouter.post("/log", DrinkController.postLog);
apiRouter.get("/favorite/:userID", DrinkController.getFavoriteDrinks);

module.exports = {apiRouter};

const apiRouter = require("express").Router();
const DrinkController = require("../controllers/apiController");

apiRouter.get("/drink", DrinkController.getAllDrink);
apiRouter.post("/drink", DrinkController.postDrink);
apiRouter.get("/drink/:drinkID", DrinkController.getOneDrink);
//apiRouter.patch("/drink/:drinkID", DrinkController.patchDrink);
//apiRouter.delete("/drink/:drinkID", DrinkController.deleteDrink);
apiRouter.get("/drink/search/:searchKeyword", DrinkController.searchDrink);

module.exports = {apiRouter};

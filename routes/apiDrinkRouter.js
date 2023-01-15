const apiDrinkRouter = require("express").Router();
const apiDrinkController = require("../controllers/apiDrinkController");

apiDrinkRouter.get("/", apiDrinkController.getAllDrinks);
apiDrinkRouter.get("/:drinkId", apiDrinkController.getOneDrink);
apiDrinkRouter.post("/", apiDrinkController.postDrink);
//apiDrinkRouter.patch("/drink/:drinkID", apiDrinkController.patchDrink);
//apiDrinkRouter.delete("/drink/:drinkID", apiDrinkController.deleteDrink);
apiDrinkRouter.get("/search/:searchKeyword", apiDrinkController.getSearchDrink);

module.exports = {apiDrinkRouter};

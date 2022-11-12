import express from "express";
import {
  getApi,
  getAllDrink,
  postDrink,
  getOneDrink,
  patchDrink,
  deleteDrink,
} from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.route("/drink").get(getAllDrink).post(postDrink);
apiRouter
  .route("/drink/:drinkID")
  .get(getOneDrink)
  .patch(patchDrink)
  .delete(deleteDrink);

export default apiRouter;

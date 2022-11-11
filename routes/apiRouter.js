import express from "express";
import {getApi} from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.route("/").get(getApi);

export default apiRouter;

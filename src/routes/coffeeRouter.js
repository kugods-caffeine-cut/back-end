import express from "express";
import {getCoffee} from "../controllers/coffeeController";

const coffeeRouter = express.Router();

coffeeRouter.route("/").get(getCoffee);

export default coffeeRouter;

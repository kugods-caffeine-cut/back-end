import Drink from "../model/Drink";
import Size from "../model/Size";

export const getApi = async (req, res) => {
  res.send("API를 위한 router, controller 입니다.");
};
export const getAllDrink = async (req, res) => {
  res.send("getAllDrink 작업중");
};
export const postDrink = async (req, res) => {
  res.send("postDrink 작업중");
};
export const getOneDrink = async (req, res) => {
  const drinkID = req.params;
  const drinkInfo = await Drink.findById(drinkID);
  res.send(drinkInfo);
};
export const patchDrink = async (req, res) => {
  res.send("patchDrink 작업중");
};
export const deleteDrink = async (req, res) => {
  res.send("deleteDrink 작업중");
};

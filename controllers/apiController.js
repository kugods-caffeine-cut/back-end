import Drink from "../model/Drink";

export const getApi = async (req, res) => {
  res.send("API를 위한 router, controller 입니다.");
};
export const getAllDrink = async (req, res) => {
  const drinksInfo = await Drink.find();
  res.send(drinksInfo);
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

import Drink from "../model/item";
import Size from "../model/size";

export const getApi = (req, res) => {
  res.send("API를 위한 router, controller 입니다.");
};
export const getAllDrink = (req, res) => {
  res.send("getAllDrink 작업중");
};
export const postDrink = (req, res) => {
  res.send("postDrink 작업중");
};
export const getOneDrink = (req, res) => {
  res.send("getOneDrink 작업중");
};
export const patchDrink = (req, res) => {
  res.send("patchDrink 작업중");
};
export const deleteDrink = (req, res) => {
  res.send("deleteDrink 작업중");
};

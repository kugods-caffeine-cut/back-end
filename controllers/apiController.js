import Drink from "../model/Drink";

export const getApi = async (req, res) => {
  res.send("API를 위한 router, controller 입니다.");
};
export const getAllDrink = async (req, res) => {
  const drinksInfo = await Drink.find();
  res.send(drinksInfo);
};
export const postDrink = async (req, res) => {
  const {brand, drink_name, temp, img, size, kcal, caffeine} = req.body;
  const newDrink = await Drink.create({
    brand,
    drink_name,
    temp,
    img,
    size,
    kcal,
    caffeine,
  });
  res.send(newDrink);
};

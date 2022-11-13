import Drink from "../model/Drink";

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
export const getOneDrink = async (req, res) => {
  const {drinkID} = req.params;
  const drinkInfo = await Drink.findById(drinkID);
  res.send(drinkInfo);
};
export const patchDrink = async (req, res) => {
  const {drinkID} = req.params;
  const {brand, drink_name, temp, img, size, kcal, caffeine} = req.body;
  const newDrink = await Drink.findByIdAndUpdate(
    drinkID,
    {
      brand,
      drink_name,
      temp,
      img,
      size,
      kcal,
      caffeine,
    },
    {new: true},
  );
  res.send(newDrink);
};
export const deleteDrink = async (req, res) => {
  const {drinkID} = req.params;
  await Drink.findByIdAndDelete(drinkID);
  res.send(`id가 ${drinkID}인 drink를 삭제했습니다.`);
};

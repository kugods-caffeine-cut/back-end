const {Drink} = require("../model/Drink");
const {httpResponse} = require("../config/http-response");

const DrinkController = {
  getAllDrink: async (req, res) => {
    try {
      const drinksInfo = await Drink.find();
      return httpResponse.SUCCESS_OK(res, "", drinksInfo);
    } catch (error) {
      return httpResponse.BAD_REQUEST(res, "", error);
    }
  },

  postDrink: async (req, res) => {
    try {
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
      httpResponse.SUCCESS_OK(res, "", newDrink);
    } catch (error) {
      httpResponse.BAD_REQUEST(res, "", error);
    }
  },

  getOneDrink: async (req, res) => {
    try {
      const {drinkID} = req.params;
      const drinkInfo = await Drink.findById(drinkID);
      httpResponse.SUCCESS_OK(res, "", drinkInfo);
    } catch (error) {
      httpResponse.BAD_REQUEST(res, "", error);
    }
  },

  patchDrink: async (req, res) => {
    try {
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
      httpResponse.SUCCESS_OK(res, "", newDrink);
    } catch (error) {
      httpResponse.BAD_REQUEST(res, "", error);
    }
  },

  deleteDrink: async (req, res) => {
    try {
      const {drinkID} = req.params;
      await Drink.findByIdAndDelete(drinkID);
      httpResponse.SUCCESS_OK(`id가 ${drinkID}인 drink를 삭제했습니다.`);
    } catch (error) {
      httpResponse.BAD_REQUEST(res, "", error);
    }
  },
};

module.exports = DrinkController;

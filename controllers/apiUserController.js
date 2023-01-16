const {Drink} = require("../model/Drink");
const {Size} = require("../model/Size");
const {User} = require("../model/User");
const {Log} = require("../model/Log");
const {httpResponse} = require("../config/http-response");

const apiUserController = {
  getFavoriteDrinks: async (req, res) => {
    try {
      const {userId} = req.params;
      const user = await User.find(
        {_id: userId},
        {
          favorites: true,
        },
      ).populate(favorites);
      const favorites = user.favorite;
      httpResponse.SUCCESS_OK(res, "", favorites);
    } catch (error) {
      httpResponse.BAD_REQUEST(res, "", error);
    }
  },
};
module.exports = apiUserController;

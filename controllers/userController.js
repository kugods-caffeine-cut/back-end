const {Drink} = require("../model/Drink");
const {Size} = require("../model/Size");
const {User} = require("../model/User");
const {Log} = require("../model/Log");
const {httpResponse} = require("../config/http-response");
const LogController = require("./logController");

const checkValidUser = async kakaoId => {
  try {
    const user = await User.find({kakaoId: kakaoId, isDeleted: false});
    console.log(user);
    if (user) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

const UserController = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.find({isDeleted: false});
      return httpResponse.SUCCESS_OK(res, "", users);
    } catch (error) {
      console.log(error);
      return httpResponse.BAD_REQUEST(res, "", error);
    }
  },
  getOneUser: async (req, res) => {
    try {
      const {userId} = req.params;
      const user = await User.findById(userId);
      if (!user) {
        return httpResponse.NOT_FOUND(res, "no user found", {});
      }
      return httpResponse.SUCCESS_OK(res, "", user);
    } catch (error) {
      console.log(error);
      return httpResponse.BAD_REQUEST(res, "", error);
    }
  },
  getFavoriteDrinks: async (req, res) => {
    try {
      const {userId} = req.params;
      const {favorites} = await User.findById(userId).populate("favorites");
      httpResponse.SUCCESS_OK(res, "", favorites);
    } catch (error) {
      httpResponse.BAD_REQUEST(res, "", error);
    }
  },
  getUserLogs: async (req, res) => {
    try {
      const {userId} = req.params;
      const userLogs = await Log.find({userId});
      httpResponse.SUCCESS_OK(res, "", userLogs);
    } catch (error) {
      httpResponse.BAD_REQUEST(res, "", error);
    }
  },
  createOneUser: async (req, res) => {
    try {
      const {kakaoId, kakaoObj} = req.body;
      const isValid = await checkValidUser(kakaoId);
      if (isValid) {
        const newUser = await User.create({
          kakaoId: kakaoId,
          kakaoObj: kakaoObj,
          favorites: [],
        });
        return httpResponse.SUCCESS_CREATED(res, "", newUser);
      } else {
        return httpResponse.BAD_REQUEST(
          res,
          "user already exists with this id",
          {},
        );
      }
    } catch (error) {
      console.log(error);
      return httpResponse.BAD_REQUEST(res, "", error);
    }
  },
  deleteOneUser: async (req, res) => {
    try {
      const {userId} = req.params;
      const user = await User.findByIdAndUpdate(
        userId,
        {isDeleted: true},
        {new: true},
      );
      if (!user) {
        return httpResponse.BAD_REQUEST(res, "invalid user id", {});
      }
      return httpResponse.SUCCESS_OK(res, "", user);
    } catch (error) {
      console.log(error);
      return httpResponse.BAD_REQUEST(res, "", error);
    }
  },
};

module.exports = UserController;

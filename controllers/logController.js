const {Drink} = require("../model/Drink");
const {Size} = require("../model/Size");
const {User} = require("../model/User");
const {Log} = require("../model/Log");
const {httpResponse} = require("../config/http-response");

const LogController = {
  getAllLogs: async (req, res) => {
    try {
      const logsInfo = await Log.find(
        {},
        {
          _id: true,
          userId: true,
          drinkId: true,
          size: true,
          num: true,
          caffeine: true,
          option: true,
        },
      );
      return httpResponse.SUCCESS_OK(res, "", logsInfo);
    } catch (error) {
      return httpResponse.BAD_REQUEST(res, "", error);
    }
  },
  getOneLog: async (req, res) => {
    try {
      const {logId} = req.params;
      const logInfo = await Drink.find(
        {_id: logId},
        {
          _id: true,
          userId: true,
          drinkId: true,
          size: true,
          num: true,
          caffeine: true,
          option: true,
        },
      );
      httpResponse.SUCCESS_OK(res, "", logInfo);
    } catch (error) {
      httpResponse.BAD_REQUEST(res, "", error);
    }
  },
  createOneLog: async (req, res) => {
    try {
      const {userId, drinkId, size, num, caffeine, option} = req.body;
      const newLog = await Log.create({
        userId,
        drinkId,
        size,
        num,
        caffeine,
        option,
      });
      httpResponse.SUCCESS_OK(res, "", newLog);
    } catch (error) {
      httpResponse.BAD_REQUEST(res, "", error);
    }
  },
};

module.exports = LogController;

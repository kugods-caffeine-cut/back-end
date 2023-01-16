const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    drinkId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Drink",
      required: true,
    },
    size: {
      type: String,
      enum: ["스몰", "레귤러", "라지", "톨", "그란데", "벤티"],
    },
    num: {type: Number, required: true},
    caffeine: {type: Number},
    option: {
      temp: {
        type: String,
        enum: ["ICE", "HOT"],
      },
      addshot: {type: Number},
      additional: {
        type: String,
        enum: ["blonde", "decaf", "1/2decaf"],
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Log = mongoose.model("Log", logSchema);
module.exports = {Log};

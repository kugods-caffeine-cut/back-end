const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    kakaoId: {type: String, required: true},
    // kakaoId = kakaoObj 안의 id 값
    kakaoObj: {type: Object, required: true},
    favorites: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Drink",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);
module.exports = {User};

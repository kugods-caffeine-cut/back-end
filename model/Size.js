import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema(
  {
    brand: {type: String},
    size_onze: {type: mongoose.Schema.Types.Mixed},
    // 2차원 배열입니다. (2차원 배열을 몽구스로 정의할 수 없어서 Mixed타입으로 정의함)
    //예) [["숏", 8], ["톨", 12] ... ]
  },
  {timestamps: true},
);

const Size = mongoose.model("Size", sizeSchema);
export default Size;

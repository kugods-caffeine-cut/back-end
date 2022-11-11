import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
  brand: {type: String},
  Size: [{type: Number}],
  // 예) ("tall", "355")
});

const Size = mongoose.model("Size", sizeSchema);
export default Size;

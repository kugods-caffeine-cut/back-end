import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
  shopName: {type: Srting},
  numSize: {type: Number},
  strSize: {type: String},
});

const Size = mongoose.model("Stem", sizeSchema);
export default Size;

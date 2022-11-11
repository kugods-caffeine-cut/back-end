import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    brand: {type: String, required: true},
    drink_name: {type: String, required: true},
    temp: {type: String},
    img: {type: String},
    size: {type: Number},
    kcal: {type: Number},
    caffeine: {type: Number, required: true},
  },
  {
    timestamps: true,
  },
);

const Item = mongoose.model("Item", itemSchema);
export default Item;

import mongoose from "mongoose";

const drinkSchema = new mongoose.Schema(
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

const Drink = mongoose.model("Drink", drinkSchema);
export default Drink;

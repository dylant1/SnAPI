import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  power: Number,
  //   ability: String,
  abilityType: String,
  description: String,
});

export default mongoose.model("Card", cardSchema);

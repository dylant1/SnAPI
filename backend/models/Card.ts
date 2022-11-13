import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  power: Number,
  //   ability: String,
  abilityType: String,
  description: String,
  pool: Number,
});

export default mongoose.model("Card", cardSchema);

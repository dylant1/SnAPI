import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    name: String,
    cost: Number,
    power: Number,
    description: String,
    abilityType: String,
    abilityID: Number,
    pool: Number,
    hasAbility: Boolean,
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Card", cardSchema);

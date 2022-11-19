import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    name: String,
    cost: Number,
    power: Number,
    description: String,
    pool: Number,
    img: String,
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Card", cardSchema);

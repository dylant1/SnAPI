import Card from "../models/Card";
import { Request, Response } from "express";

export const getCards = async (req: Request, res: Response) => {
  let filters = {
    power: req.query.power,
    energy: req.query.energy,
    pool: req.query.pool,
  };
  try {
    const cards = await Card.find(
      { ...filters },
      {
        _id: 0,
        __v: 0,
      }
    );
    return cards;
  } catch (err) {
    throw err;
  }
};
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// Get single car by ID
export const getSingleCard = async (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    let res = name.split("_");
    let search = "";
    for (const str in res) {
      search += capitalizeFirstLetter(str) + " ";
    }
    console.log(search);
    const card = await Card.findOne({ name: search });
    return card;
  } catch (err) {
    throw err;
  }
};

// Add a new car
export const addCard = async (req: Request, res: Response) => {
  try {
    const card = new Card(req.body);
    return card.save();
  } catch (err) {
    throw err;
  }
};

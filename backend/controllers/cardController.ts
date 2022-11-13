import Card from "../models/Card";
import { Request, Response } from "express";
export const getCards = async (req: Request, res: Response) => {
  try {
    const cards = await Card.find();
    return cards;
  } catch (err) {
    throw err;
  }
};

// Get single car by ID
export const getSingleCard = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const card = await Card.findById(id);
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

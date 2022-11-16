"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCard = exports.getSingleCard = exports.getCards = void 0;
const Card_1 = __importDefault(require("../models/Card"));
const getCards = async (req, res) => {
    try {
        const cards = await Card_1.default.find({
            _id: 0,
        });
        return cards;
    }
    catch (err) {
        throw err;
    }
};
exports.getCards = getCards;
// Get single car by ID
const getSingleCard = async (req, res) => {
    try {
        const id = req.params.id;
        const card = await Card_1.default.findById(id);
        return card;
    }
    catch (err) {
        throw err;
    }
};
exports.getSingleCard = getSingleCard;
// Add a new car
const addCard = async (req, res) => {
    try {
        const card = new Card_1.default(req.body);
        return card.save();
    }
    catch (err) {
        throw err;
    }
};
exports.addCard = addCard;

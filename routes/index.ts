import * as cardController from "../controllers/cardController";

const routes = [
  {
    method: "GET",
    url: "/api/cards",
    handler: cardController.getCards,
  },
  {
    method: "GET",
    url: "/api/cards/:id",
    handler: cardController.getSingleCard,
  },
  {
    method: "POST",
    url: "/api/cards",
    handler: cardController.addCard,
    // schema: documentation.addCarSchema,
  },
];
export default routes;

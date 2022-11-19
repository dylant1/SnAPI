import * as cardController from "../controllers/cardController";

const routes = [
  {
    method: "GET",
    url: "/api/cards",
    handler: cardController.getCards,
  },
  {
    method: "GET",
    url: "/api/card/:name",
    handler: cardController.getSingleCard,
  },
  {
    method: "POST",
    url: "/api/cards",
    handler: cardController.addCard,
    // schema: documentation.addCarSchema,
  },
  // {
  //   method: "GET",
  //   url: "/api/locations",
  // },
];
export default routes;

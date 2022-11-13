import Fastify from "fastify";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import routes from "./routes";
dotenv.config();
const fastify = Fastify({
  logger: true,
});
const URI = process.env.CONNECTION_URI;
console.log(URI);
mongoose
  .connect(URI!, {
    dbName: "snap-data",
  })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

// fastify.get("/ping", async (request, reply) => {
//   return "pong\n";
// });
//figure out the type of route
routes.forEach((route: any, index: Number) => {
  fastify.route(route);
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});

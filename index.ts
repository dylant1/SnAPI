import Fastify from "fastify";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import routes from "./routes";
import fastifyView from "@fastify/view";

dotenv.config();
const fastify = Fastify({
  logger: true,
});
const URI =
  process.env.CONNECTION_URI ||
  "mongodb+srv://Admin01:jjuTMpuQMBtsy3nB@snapi.vy3duf6.mongodb.net/?retryWrites=true&w=majority";
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

fastify.register(fastifyView, {
  engine: {
    ejs: require("ejs"),
  },
});

fastify.get("/", (req, reply) => {
  reply.view("/templates/index.ejs", { title: "SnAPI" });
});

routes.forEach((route: any, index: Number) => {
  fastify.route(route);
});

fastify.listen({ port: 8080 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});

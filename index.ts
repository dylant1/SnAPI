import Fastify from "fastify";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import routes from "./routes";
import fastifyView from "@fastify/view";
import cors from "@fastify/cors";
// import fastifyEnv from "@fastify/env";
dotenv.config();
const fastify = Fastify({
  logger: false,
});
fastify.register(cors, {
  origin: "*",
  methods: ["POST", "GET"],
});
const URI =
  "mongodb+srv://Admin01:jjuTMpuQMBtsy3nB@snapi.vy3duf6.mongodb.net/?retryWrites=true&w=majority";
console.log(URI);
mongoose
  .connect(URI, {
    dbName: "snap-data",
  })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
    console.log("cant connect");
  });

fastify.register(fastifyView, {
  engine: {
    ejs: require("ejs"),
  },
});
// fastify.register(fastifyEnv);
fastify.get("/", (req, reply) => {
  reply.view("/templates/index.ejs", { title: "SnAPI" });
});

let port: number;
if (process.env.PORT) {
  port = parseInt(process.env.PORT, 10);
} else {
  port = 3000;
}

routes.forEach((route: any, index: Number) => {
  fastify.route(route);
});
// // const port: any = parseInt(<string>process.env.PORT, 10) || 3000;
// fastify.listen({ port: 3000 }, function (err, address) {
//   if (err) {
//     fastify.log.error(err);
//     console.log("Fail");

//     process.exit(1);
//   }
//   // Server is now listening on ${address}
// });

fastify.listen({ port: port }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});

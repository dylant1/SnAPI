"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = __importStar(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const view_1 = __importDefault(require("@fastify/view"));
const cors_1 = __importDefault(require("@fastify/cors"));
// import fastifyEnv from "@fastify/env";
dotenv.config();
const fastify = (0, fastify_1.default)({
    logger: false,
});
fastify.register(cors_1.default, {
    origin: "*",
    methods: ["POST", "GET"],
});
const URI = "mongodb+srv://Admin01:jjuTMpuQMBtsy3nB@snapi.vy3duf6.mongodb.net/?retryWrites=true&w=majority";
console.log(URI);
mongoose_1.default
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
fastify.register(view_1.default, {
    engine: {
        ejs: require("ejs"),
    },
});
// fastify.register(fastifyEnv);
fastify.get("/", (req, reply) => {
    reply.view("/templates/index.ejs", { title: "SnAPI" });
});
let port;
if (process.env.PORT) {
    port = parseInt(process.env.PORT, 10);
}
else {
    port = 3000;
}
routes_1.default.forEach((route, index) => {
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

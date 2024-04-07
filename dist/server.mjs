import {
  getEventAttendees
} from "./chunk-6IGDUNZL.mjs";
import {
  getEvent
} from "./chunk-BWA55LPE.mjs";
import {
  registerForEvent
} from "./chunk-KKN2KUEE.mjs";
import {
  erroHandler
} from "./chunk-QZJ27SSA.mjs";
import {
  checkIn
} from "./chunk-ZC3UN766.mjs";
import {
  createEvent
} from "./chunk-JCYK55MW.mjs";
import "./chunk-N64RANLY.mjs";
import {
  getAttendeeBadge
} from "./chunk-LJLY5T2B.mjs";
import "./chunk-JV6GRE7Y.mjs";
import "./chunk-A42IFF2V.mjs";

// src/server.ts
import fastify from "fastify";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o BACK-END da aplica\xE7\xE3o pass.in constru\xEDda durante a NLW Unite da Rocketseat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(erroHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});

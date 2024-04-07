import {
  BadRequest
} from "./chunk-A42IFF2V.mjs";

// src/erro-hendler.ts
import { ZodError } from "zod";
var erroHandler = (error, request, reply) => {
  const { validation, validationContext } = error;
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: `Error during validating`,
      errors: error.flatten().fieldErrors
    });
  }
  if (error instanceof BadRequest) {
    return reply.status(400).send({ message: error.message });
  }
  return reply.status(500).send({ message: "Internal server error" });
};

export {
  erroHandler
};

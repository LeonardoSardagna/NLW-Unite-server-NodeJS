import {FastifyInstance} from 'fastify'
import { BadRequest } from './_erros/bad-request'
import { ZodError } from 'zod'

type FastifyErroHandler = FastifyInstance['errorHandler']

export const erroHandler: FastifyErroHandler = (error, request, reply) =>{
    const {validation, validationContext} = error

    if(error instanceof ZodError){
        return reply.status(400).send({
            message: `Error during validating`,
            errors: error.flatten().fieldErrors,
        })
    }

    if(error instanceof BadRequest){
        return reply.status(400).send({message: error.message})
    }
    return reply.status(500).send({message: 'Internal server error'})
}
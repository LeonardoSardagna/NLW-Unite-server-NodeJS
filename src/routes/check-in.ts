import { FastifyInstance, FastifyTypeProvider } from "fastify";
import z from "zod";
import { prisma } from "../lib/prisma";
import { BadRequest } from "../_erros/bad-request";

export async function checkIn(app: FastifyInstance){
    app
    .withTypeProvider<FastifyTypeProvider>()
    .get('/attendees/:attendeeId/check-in', {
        schema:{
            summary: 'Checki-in an attendees',
            tags:['check-ins'],
            params: z.object({
                attendeeId: z.coerce.number().int()
            }),
            response:{
                201: z.null(),
            },
        },
    }, async (request, reply)=>{
        const {attendeeId} = request.params

        const attendeeCheckIn = await prisma.checkIn.findUnique({
            where:{
                attendeeId,
            }
        })
        if(attendeeCheckIn !== null){
            throw new BadRequest('Attendee already checked in!')
        }
        await prisma.checkIn.create({
            data:{
                attendeeId,
            }
        })
        return reply.status(201).send()
    })
}
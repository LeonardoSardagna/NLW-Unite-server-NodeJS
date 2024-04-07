import {prisma} from '../src/lib/prisma'
async function seed(){
    await prisma.event.create({
        data:{
            id: '12d1dd79-48ed-4656-9ce5-61828fc7cb86',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para que é apaixonado por códigos!',
            maximumAttendees: 120,
        }
    })
}

seed().then(()=>{
    console.log("Database seed")
    prisma.$disconnect()
})
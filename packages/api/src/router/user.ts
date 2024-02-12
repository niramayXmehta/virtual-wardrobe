import { router, publicProcedure } from '../trpc'
import { prisma } from 'db'
import { z } from 'zod'

export const userRouter = router({  

    all: publicProcedure.query(() => {
        return prisma.user.findMany()
    }),

    // 👇 new api enpoint, which takes a 👇 string as input and...
    emailByName: publicProcedure.input(z.string()).query(({ input }) => {
        // finds the first user
        return prisma.user.findFirst({
            // where the name matches the input
            where: {
                name: input
            },
            // and returns their email
            select: {
                email: true
            }
        })
    }),
})


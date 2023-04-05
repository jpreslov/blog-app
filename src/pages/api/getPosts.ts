import { Prisma } from '@prisma/client'
import prisma from '../../../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const getPosts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    res.status(200).json(getPosts)
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      const { code, meta, message } = err
      console.log({ code, meta, message })
    }
    res.status(500).json(err)
  }
}

export default handler
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
    res.status(500).json({ msg: "Could not fetch posts" })
  }
}

export default handler
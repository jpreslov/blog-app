// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log('hit')
    const posts = await prisma.posts.findMany()
    console.log(posts)
    res.status(200).json(posts)
  } catch(error) {
    res.status(500).json(error)
  }
}

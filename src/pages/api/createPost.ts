import prisma from '../../../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

interface Post {
  createdAt: Date,
  content: string,
  userId: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const body: Post = JSON.parse(req.body)
    const { createdAt, content, userId } = body
    // const { createdAt, content, userId } = req.body

    try {
      console.log(req.body)
      const createPost = await prisma.post.create({
        data: {
          createdAt: createdAt,
          content: content,
          userId: userId
        }
      })

        res.status(200).json(createPost)
    } catch(err) {
      console.log(err)
      res.status(500).json({ msg: 'Your post could not be created' })
    }
  }

  export default handler
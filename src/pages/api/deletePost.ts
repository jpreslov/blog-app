import prisma from '../../../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

interface Post {
  id: number
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body: Post = JSON.parse(req.body)
  const { id } = body

  try {
    const deletePost = await prisma.post.delete({
      where: {
        id: id
      }
    })

    res.status(200).json(deletePost)
  } catch (err) {
    res.status(500).json({ msg: 'Your post could not be deleted' })
  }
}

export default handler
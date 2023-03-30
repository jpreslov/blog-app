import prisma from '../../../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

interface Post {
  id: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const body: Post = JSON.parse(req.body)
    const { id } = body

    try {
      console.log(req.body)
      const deletePost = await prisma.post.delete({
        where: {
          id: id
        }
      })

        res.status(200).json(deletePost)
    } catch(err) {
      console.log(err)
      res.status(500).json({ msg: 'Your post could not be deleted' })
    }
  }

  export default handler
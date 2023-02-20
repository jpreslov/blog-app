import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../prisma/client'

type Data = {
  content: string,
  pictures: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
    const parsedReq : Data = JSON.parse(req.body)
    const post = await prisma.posts.create({
      data: {
        content: parsedReq.content,
        pictures: parsedReq.pictures,
      }
    })
    res.status(200).json(post)
  } catch(error) {
    res.status(500).json({ msg: error })
  }
}
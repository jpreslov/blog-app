import { clerkClient } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const body = JSON.parse(req.body)
    const { userId } = body

    console.log(userId)

    const data = userId ? await clerkClient.users.getUser(userId) : undefined

    res.status(200).json(data)
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export default handler
import { clerkClient } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";

interface IUser {
  id: string | undefined,
  createdAt: number | undefined,
  profileImageUrl: string | undefined,
  username: string | null | undefined
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const body = JSON.parse(req.body)
    const { userId } = body

    const data = userId ? await clerkClient.users.getUser(userId) : undefined

    const formattedUser: IUser = {
      id: data?.id,
      createdAt: data?.createdAt,
      profileImageUrl: data?.profileImageUrl,
      username: data?.username
    }

    console.log('from api', formattedUser.username)
    res.status(200).json(formattedUser)

  } catch (err) {
    // console.log(err)
    res.status(500).json(err)
  }
}

export default handler
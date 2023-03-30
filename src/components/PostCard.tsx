import { clerkClient, User } from '@clerk/nextjs/dist/api'
import dayjs from 'dayjs'

import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

interface IPost {
  id: string,
  content: string,
  createdAt: Date,
  userId: string
}

const PostCard = ({ id, createdAt, content, userId }: IPost) => {
  const formattedTime = dayjs().to(createdAt.toString())

  const getUser: () => Promise<string | null> = async () => {
    const user = await clerkClient.users.getUser(userId)
    return user.username
  }

  const user: string = getUser().toString()

  return (
    <div className='p-4 m-2 rounded-md text-zinc-200 bg-slate-700'>
      <h1>{id}</h1>
      <h1>{user}</h1>
      <h1>{content}</h1>
      <h1>{formattedTime}</h1>
    </div>
  )
}

export default PostCard
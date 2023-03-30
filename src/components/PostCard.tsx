// import { clerkClient, User } from '@clerk/nextjs/dist/api'
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

  const getUser: () => Promise<Response> = async () => {
    const user = await fetch('/api/getUser', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId
      })
    })
    return user
  }

  const user: string = getUser().toString()

  const deletePost = async () => {
    const data = await fetch('/api/deletePost', {
      method: 'POST',
      body: JSON.stringify({ id })
    })

    return data
  }

  return (
    <div className='p-4 m-2 rounded-md text-zinc-200 bg-slate-700'>
      <div className='flex flex-row w-[100%] justify-between'>
        <h1>{user}</h1>
        <h1
          className='p-2 text-black bg-white rounded-full'
          onClick={() => deletePost()}
        >
            X
          </h1>
      </div>
      <h1>{content}</h1>
      <h1>{formattedTime}</h1>
    </div>
  )
}

export default PostCard
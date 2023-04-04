// import { clerkClient, User } from '@clerk/nextjs/dist/api'
import Image from 'next/image'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { useUser } from '@clerk/nextjs'

import delIcon from '../../public/icons8-trash.svg'
import { NextApiResponse } from 'next'
import { useState } from 'react'

dayjs.extend(relativeTime)

interface IPost {
  id: string,
  content: string,
  createdAt: Date,
  userId: string
}

interface IUser {
  id: string,
  createdAt: Date,
  profileImageUrl: string,
  username: string
}

const PostCard = ({ id, createdAt, content, userId }: IPost) => {
  const [username, setUsername] = useState<string>()
  const formattedTime = dayjs().to(createdAt.toString())
  const currentUser = useUser()

  const getUser: () => Promise<IUser> = async () => {
    const data = await fetch('/api/getUser', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId
      })
    })
    const res: IUser = await data.json()
    // console.log(res)
    setUsername(res)
    return res
  }

  const user: Promise<IUser> = getUser()

  const deletePost = async () => {
    const data = await fetch('/api/deletePost', {
      method: 'POST',
      body: JSON.stringify({ id })
    })

    return data
  }

  return (
    <div className='w-3/4 p-4 m-2 rounded-md shadow-lg text-zinc-200 bg-slate-700 bg-opacity-80'>
      <div className='flex flex-row w-[100%] justify-between'>
        <Image alt='user profile pic' src={user.profileImageUrl} width={0} height={0} />
        <h1>{username}</h1>

        {
          currentUser.user?.id === userId &&
          <button className='px-2 py-1 rounded-full bg-slate-400 h-30px w-30px'>
            <Image
              alt='Delete icon'
              width={20}
              height={20}
              onClick={() => deletePost()}
              src={delIcon}
            />
          </button>
        }

      </div>
      <h1 className='text-2xl'>{content}</h1>
      <h1 className='text-sm font-medium text-slate-400'>{formattedTime}</h1>
    </div>
  )
}

export default PostCard
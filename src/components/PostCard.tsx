// import { clerkClient, User } from '@clerk/nextjs/dist/api'
import Image from 'next/image'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { useUser } from '@clerk/nextjs'

import delIcon from '../../public/icons8-trash.svg'
import { NextApiResponse } from 'next'
import { useEffect, useMemo, useState } from 'react'

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
  const [author, setAuthor] = useState<IUser>()
  const formattedTime = dayjs().to(createdAt.toString())
  const { user, isSignedIn } = useUser()

  console.log(user)

  useMemo(() => {
    const getUser: () => Promise<IUser> = async () => {
      const data = await fetch('/api/getUser', {
        method: 'POST',
        body: JSON.stringify({
          userId: userId
        })
      })

      const res: IUser = await data.json()

      setAuthor(res)
      return res
    }

    if (userId) getUser()
  }, [userId])

  const deletePost = async () => {
    const data = await fetch('/api/deletePost', {
      method: 'POST',
      body: JSON.stringify({ id })
    })

    return data
  }

  return (
    // <h1>hey</h1>
    <div className='w-3/4 p-4 m-2 bg-gray-900 rounded-md shadow-sm shadow-gray-700 text-zinc-200'>
      <div className='flex flex-row w-[100%] justify-between'>
        <div className='flex flex-row align-middle'>
          <Image
            alt='user profile pic'
            src={author?.profileImageUrl || 'https://www.gravatar.com/avatar?d=mp'}
            width={30}
            height={30}
            className='mr-3 rounded-full'
          />
          <h1 className='flex font-medium'>{author?.username}</h1>
        </div>

        {
          isSignedIn && user && user?.id === userId &&
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
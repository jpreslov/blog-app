import Head from 'next/head'

import { useState, useEffect, ChangeEvent, FormEvent, useCallback, SetStateAction } from 'react'

import { NextApiRequest, NextApiResponse } from 'next'

import { useUser } from '@clerk/nextjs'
import { UserResource } from '@clerk/types'

import PostCard from '@/components/PostCard'
import CreatePostWidget from '@/components/CreatePostWidget'
// import { log } from 'next-axiom'

interface IPost {
  id: string,
  content: string,
  createdAt: Date,
  userId: string
}

export default function Home() {
  const [textInput, setTextInput] = useState('')
  const [posts, setPosts] = useState<IPost[]>([])
  const [usernameErr, setUsernameErr] = useState(true)
  const { user, isSignedIn } = useUser()

  const renderPosts: JSX.Element[] = posts.map(post => {
    return <PostCard
      key={post.id}
      id={post.id}
      createdAt={post.createdAt}
      content={post.content}
      userId={post.userId}
    />
  })

  const usernameCheck: () => boolean = () => {
    if (user && !user.username) {
      return true
    } else if (user && user.username !== '') {
      return false
    }
    return true
  }

  const checkUser: SetStateAction<boolean> = usernameCheck()

  useEffect(() => {
    console.log(user)
    const fetchPosts = async () => {
      const res = await fetch('/api/getPosts')
      const data = await res.json()
      if (data && data !== '') setPosts(data)
    }

    fetchPosts()
    setUsernameErr(checkUser), { once: true }

  }, [user, isSignedIn, checkUser])

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col overflow-x-hidden overflow-y-scroll justify-evenly'>
        {/* Create post */}
        {
          isSignedIn ? (
            <div className='mb-[-200px]'>
              <CreatePostWidget
                user={user}
                textInput={textInput}
                setTextInput={setTextInput}
                usernameErr={usernameErr}
              />
            </div>

          ) : (
            <div className='flex h-[100px] justify-center flex-col text-center w-screen'>
              <div className='w-2/3 p-4 m-auto rounded-lg bg-gradient-to-tl from-slate-900 to-slate-700 '>
                <h5 className='text-lg text-slate-100'>
                  <a href='/sign-in' className='font-medium'>Sign in</a> to create a post.
                </h5>
              </div>
            </div>
          )
        }

        {/* Display all posts */}
        <div className='flex flex-col items-center justify-center w-screen mb-2'>
          {posts && posts.length > 0 ? renderPosts : ''}
        </div>

      </main>
    </>
  )
}

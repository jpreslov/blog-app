'use client' 

import Image from "next/image"
import { useState, useEffect } from "react"
import { CldImage } from 'next-cloudinary'
// import { NextComponentType } from "next"
// import Link from 'next/link'


interface IPost {
  id: number,
  content: string,
  pictures: string,
  createdAt: EpochTimeStamp,
  userId: number
}

type TPosts = Array<IPost>

export async function getPosts(request) {
  const res = await fetch(request)
  const body = await res.json()
  return body
}

export default function Feed () {
  const [posts, setPosts] = useState<TPosts>([])

  useEffect(() => {
    fetch('/api/getPosts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  if(!posts.length) return <div className='flex p-3 m-2 rounded-lg bg-cyan-900'></div>

  return (
      posts.map(post => {
        return (
          <div key={post.id} className='flex-row p-3 m-2 rounded-lg bg-cyan-900'>
            <p>{post.userId}</p>
            <div className='grid grid-rows-3 p-3 m-2 rounded-lg bg-cyan-900'>
              <p>{post.content}</p>
              <p>{post.createdAt}</p>
              <div>
                <CldImage alt='alt text' width='200' height='200' src='v1676927821/uploads/uxcvqs3vrcjczji8ptmr.png' sizes='100vw' />
              </div>
            </div> 
          </div> 
        )  
      })
  )
}

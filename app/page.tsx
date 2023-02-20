'use client'
import { useEffect, useState } from "react"
import Create from "./components/Create"
import Feed from "./components/Feed"

export async function getPosts(request) {
  const res = await fetch(request,
    { cache: 'no-store' })
  const body = await res.json()
  return body
}

export default function Home() {


  return (
    <main>
      <Create />
      <Feed />
    </main>
  )
}
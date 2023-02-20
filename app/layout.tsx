import Create from './components/Create'
import Feed from './components/Feed'
import './globals.css'

interface IPost {
  id: number,
  content: string,
  pictures: string,
  createdAt: EpochTimeStamp,
  userId: number
}

type TPosts = IPost[]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}

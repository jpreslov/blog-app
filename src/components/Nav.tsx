import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { NextComponentType } from "next"

const Nav: NextComponentType = () => {
  return (
    <SignedIn>
      <div className='flex flex-row justify-end w-screen h-14 bg-slate-700'>
        <div className='flex flex-col p-3'>
          <UserButton />
        </div>
      </div>
    </SignedIn>
  )
}

export default Nav
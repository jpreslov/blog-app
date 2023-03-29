import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { NextComponentType } from "next"

const Nav: NextComponentType = () => {
  return (
    <div className='flex flex-row justify-end w-screen h-14 bg-slate-700'>
      <SignedIn>
        <div className='flex flex-col p-3'>
          <UserButton />
        </div>
      </SignedIn>
    </div>
  )
}

export default Nav
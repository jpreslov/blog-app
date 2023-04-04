import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import { NextComponentType } from "next"

const Nav: NextComponentType = () => {
  return (
    <div className='flex flex-row justify-end w-screen h-14 bg-slate-700'>
      <div className='flex flex-col p-3'>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div className='mr-5 text-slate-300'>
            <SignInButton redirectUrl="/sign-in" />
          </div>
        </SignedOut>
      </div>
    </div>
  )
}

export default Nav
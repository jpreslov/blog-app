import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs"

const Nav = () => {
  return (
    <div className='flex flex-row justify-end w-screen h-14 bg-gradient-to-r from-slate-700 to-slate-900'>
      <SignedIn>
        <div className='flex flex-col p-3'>
          <UserButton />
        </div>
      </SignedIn>
    </div>
  )
}

export default Nav
import { SignUp, SignedOut } from '@clerk/nextjs'

const SignUpPage = () => {

  return (
    <SignedOut>
      <div className='flex content-center justify-center mt-32'>
        <SignUp path='/sign-up' routing='path' signInUrl='/sign-in' redirectUrl='/' />
      </div>
    </SignedOut>
  )
}

export default SignUpPage
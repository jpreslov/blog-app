import { SignedOut, SignIn } from '@clerk/nextjs'

const SignInPage = () => {

  return (
    <SignedOut>
      <div className='flex content-center justify-center mt-32'>
        <SignIn path='/sign-in' routing='path' signUpUrl='/sign-up' redirectUrl='/' />
      </div>
    </SignedOut>
  )
}

export default SignInPage
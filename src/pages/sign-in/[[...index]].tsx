import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {

  return (
    <div className='flex content-center justify-center mt-32'>
      <SignIn path='/sign-in' routing='path' signUpUrl='/sign-up' />
    </div>
  )
}

export default SignInPage
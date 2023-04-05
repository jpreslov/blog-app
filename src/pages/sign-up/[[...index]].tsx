import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {

  return (
    <div className='flex content-center justify-center mt-32'>
      <SignUp path='/sign-up' routing='path' signInUrl='/sign-in' />
    </div>
  )
}

export default SignUpPage
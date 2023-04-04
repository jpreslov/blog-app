import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'

import { ClerkProvider, SignedIn, SignedOut, SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes';

// export { reportWebVitals } from 'next-axiom';

export default function App({ Component, pageProps }: AppProps) {

  return (
      <ClerkProvider {...pageProps} appearance={{ baseTheme: dark }}>
        <Nav />
        <SignedIn>
          <Component {...pageProps} />
        </SignedIn>

        <SignedOut>
          <div className='flex flex-row justify-center w-screen h-screen align-middle '>
            <div className='flex flex-col justify-center align-middle h-96'>  
              <SignUp />
            </div>
          </div>
        </SignedOut>
      </ClerkProvider>
  )
}

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'

import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import SignUpPage from './sign-up/[[...index]]';
// import SignUpPage from './sign-up/[[...index]]';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps} appearance={{ baseTheme: dark }}>
      <SignedIn>
        <Nav />
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        <SignUpPage />
      </SignedOut>
    </ClerkProvider>
  )
}

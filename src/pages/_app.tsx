import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes';

import Nav from '../components/Nav'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps} appearance={{ baseTheme: dark }}>
      <Nav />
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

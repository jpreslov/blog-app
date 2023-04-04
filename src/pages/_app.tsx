import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'

import { ClerkProvider, MultisessionAppSupport, RedirectToSignUp, SignedIn, SignedOut, useAuth } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import SignUpPage from './sign-up/[[...index]]';

// export { reportWebVitals } from 'next-axiom';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps} appearance={{ baseTheme: dark }}>
      <Nav />
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

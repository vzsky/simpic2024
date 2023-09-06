import * as React from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"
import theme from '../theme/theme'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

import '@fontsource/kodchasan'
import '@fontsource/chakra-petch'
import '@fontsource/silkscreen'

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  return (
    <SessionProvider>
      <ChakraProvider theme={theme}>
        <AnimatePresence mode="wait" onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 })
          }
        }}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp

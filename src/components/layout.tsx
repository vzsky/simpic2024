import { ReactNode } from 'react'
import { Box, Container, useToken } from "@chakra-ui/react"
import Navbar from './nav/navbar'
import Footer from './footer'
import { LayoutGroup } from 'framer-motion'
import { MotionBox } from './motionFactory'
import Head from 'next/head'

type Props = {
  children: ReactNode
  FooterComponent?: () => ReactNode 
}

const Layout = ({children, FooterComponent}: Props) => {
  // const [blue, orange] = useToken('colors', ['blue.990', 'orange.900'])
  return (
    <LayoutGroup>
      <Head>
        <title> SIMPIC 2024 </title>
      </Head>
      <Box
        overflow="hidden" 
        bgGradient={"linear(to-tr, blue.990, orange.900)"}
        // style={{backgroundImage: `url(https://grainy-gradients.vercel.app/noise.svg), linear-gradient(to top right,${blue}, ${orange})`}}
      >
        <Box minH="100vh">
          <Navbar />
          <Container maxW={'5xl'} pb={10}>
            <MotionBox exit={{ opacity: 0 }}>
            {children}
            </MotionBox>
          </Container>
        </Box>
        {FooterComponent 
          ? <FooterComponent/>
          : <Footer/>
        }
      </Box>
    </LayoutGroup>
  )
}

export default Layout

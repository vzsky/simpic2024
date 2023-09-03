import { ReactNode } from 'react'
import { Box, Container, useToken } from "@chakra-ui/react"
import Navbar from './nav/navbar'
import Footer from './footer'
import { AnimatePresence, LayoutGroup } from 'framer-motion'
import { MotionBox } from './motionFactory'

type Props = {
  children: ReactNode
  footer?: boolean
}

const Layout = ({children, footer = true}: Props) => {
  // const [blue, orange] = useToken('colors', ['blue.990', 'orange.900'])
  return (
    <LayoutGroup>
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
        {footer && <Footer />}
      </Box>
    </LayoutGroup>
  )
}

export default Layout

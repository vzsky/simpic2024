import { ReactNode } from 'react'
import { Box, Container, useToken } from "@chakra-ui/react"
import Navbar from './nav/navbar'
import Footer from './footer'

type Props = {
  children: ReactNode
  footer?: boolean
}

const Layout = ({children, footer = true}: Props) => {
  // const [blue, orange] = useToken('colors', ['blue.990', 'orange.900'])
  return (
      <Box
        overflow="hidden" 
        bgGradient={"linear(to-tr, blue.990, orange.900)"}
    // style={{backgroundImage: `url(https://grainy-gradients.vercel.app/noise.svg), linear-gradient(to top right,${blue}, ${orange})`}}
      >
        <Box minH="100vh">
          <Navbar />
          <Container maxW={'5xl'} mb={10}>
            {children}
          </Container>
        </Box>
        {footer && <Footer />}
      </Box>
  )
}

export default Layout

import { ReactNode } from 'react'
import { Box, Container, useToken } from "@chakra-ui/react"
import Navbar from './nav/navbar'

type Props = {
  children: ReactNode
}

const Layout = ({children}: Props) => {
  const [blue, orange] = useToken('colors', ['blue.990', 'orange.900'])
  return (
      <Box
        minH="100vh"
        overflow="hidden" 
        style={{backgroundImage: `url(https://grainy-gradients.vercel.app/noise.svg), linear-gradient(to top right,${blue}, ${orange})`}}
      >
        <Navbar />
        <Container maxW={'5xl'}  >
          {children}
        </Container>
      </Box>
  )
}

export default Layout

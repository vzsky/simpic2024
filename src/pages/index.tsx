import { Box, Flex, Heading, Img } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Grid from '../components/grid'
import Layout from '../components/layout'
import TiltedBox from '../components/tiltedBox'
import { useMeasure } from '../helper/client'
import { useRef } from 'react'
import { useSession } from 'next-auth/react'

const position = (top: number, left: number) => ({position: 'relative', top, left})

const TiltedBoxes = () => {
  const { status } = useSession()

  const boxRef = useRef<any>(null)
  const { width } = useMeasure(boxRef)

  let s = width/3 < 100 ? 100 : width/3
  let t = 0.8 * s
  let m = 0.16 * width
  let u = 0.8 * m
  return (
    <Box h={[8*s, 8*t, 3.5*m]} overflow={"hidden"} ref={boxRef}>
      <Flex position={"relative"} top={[s/2, t/2, u]} left={[0, 0, -1.8*u]} alignItems={"center"} direction={"column"} > 
        <TiltedBox 
          style={[position(0, -s/2), position(0, -t/2), position(0.313*u, -0.45*u)]} 
          size={[s, t, 1.5*m]} 
          color={"white"} 
          href={'/'}
        >
          <Box p={[`${0.07*s}px`, `${0.08*t}px`, `${0.09*u}px`]}>
            <Img src={'/logo.png'} mt={1} />
          </Box>
        </TiltedBox>

        <TiltedBox 
          style={[position(-25, s/2-25), position(-25, t/2-25), position(-m + -u, u)]}
          size={[s, t, m]} 
          color={"white"}
          href={'/about'}
        >
          <Heading size={['md', 'lg', 'md', 'lg']}> About </Heading> 
        </TiltedBox>

        <TiltedBox 
          style={[position(-50, -s/2), position(-50, -t/2), position(-2*m + u, u)]} 
          size={[s, t, m]} 
          color={"white"}
          href={'/program'}
        > 
          <Heading size={['md', 'lg', 'md', 'lg']}> Program </Heading> 
        </TiltedBox> 

        <TiltedBox 
          style={[position(-75, s/2-25), position(-75, t/2-25), position(-3*m + 0, 2*u)]} 
          size={[s, t, m]} 
          color={"white"}
          href={'/user'}
        > 
          <Heading size={['md', 'lg', 'md', 'lg']}> 
            {status == "unauthenticated" && "Register"}
            {status == "loading" && "Register"}
            {status == "authenticated" && "Register"}
          </Heading> 
        </TiltedBox>

        <TiltedBox 
          style={[position(-100, -s/2), position(-100, -t/2), position(-4*m + -u, 3*u)]} 
          size={[s, t, m]} 
          color={"white"}
          href={'/faq'}
        > 
          <Heading size={['md', 'lg', 'md', 'lg']}> FAQ </Heading> 
        </TiltedBox>

        <TiltedBox 
          style={[position(-125, s/2-25), position(-125, t/2-25), position(-5*m + u, 3*u)]} 
          size={[s, t, m]} 
          color={"white"}
          href={'/society'}
        > 
          <Heading size={['md', 'lg', 'md', 'lg']}> Society </Heading> 
        </TiltedBox>
        
        <TiltedBox 
          style={[position(-150, -s/2), position(-150, -t/2), position(-6*m + 0, 4*u)]} 
          size={[s, t, m]} 
          color={"white"}
          href={'/contact'}
        > 
          <Heading size={['md', 'lg', 'md', 'lg']}> Contact </Heading> 
        </TiltedBox>
      </Flex>
    </Box>
  )
}

const Home: NextPage = () => {
  return (
    <Layout>
      <TiltedBoxes />
    </Layout>
  )
}

export default Home

import { Box, Flex, Heading } from "@chakra-ui/react"
import { NextPage } from "next"
import Layout from "../../components/layout"
import TiltedBox from "../../components/tiltedBox"
import { useRef } from "react"
import { useMeasure } from "../../helper/client"

const position = (top: number, left: number) => ({position: 'relative', top, left})

const Home: NextPage = () => {
  const boxRef = useRef<any>(null)
  const { width } = useMeasure(boxRef)

  let s = width/3 < 100 ? 100 : width/3
  let m = 0.2 * width
  return (
    <Layout>
      <Box h={[4*s, null, 3*m]} overflow={"hidden"} ref={boxRef}> 
        <Flex position={"relative"} top={[`${0.4*s}px`]} left={[`${-0.6*s}px`]} alignItems={"center"} direction={"column"} > 
          <TiltedBox
            size={[s, null, m]} 
            style={[position(0, 0), null, position(0, 0)]}
            color="white"
            href="/user/status"
          >
            Status 
          </TiltedBox>
          <TiltedBox
            size={[s, null, m]} 
            style={[position(0, s), null, position(0-30, m-30)]}
            color="white"
            href="/user/info"
          > 
            Information 
          </TiltedBox>
          <TiltedBox 
            size={[s, null, m]} 
            style={[position(0, 0), null, position(-2*m, 2*m-60)]}
            color="white"
            href="/user/payment"
          > 
            Payment 
          </TiltedBox>
        </Flex>
      </Box>
    </Layout>
  )
}

export default Home

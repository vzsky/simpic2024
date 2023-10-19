import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import Layout from "../../components/layout"
import TiltedBox from "../../components/tiltedBox"
import { useRef } from "react"
import { fetcher, httpReq, useMeasure } from "../../helper/client"
import useSWR from 'swr'

const position = (top: number, left: number) => ({position: 'relative', top, left})

const Home: NextPage = () => {
  let { data } = useSWR('/api/user/register', fetcher)
  const boxRef = useRef<any>(null)
  const { width } = useMeasure(boxRef)

  let s = width/3 < 100 ? 100 : width/3
  let m = 0.2 * width
  return (
    <Layout>
      <Box h={[5*s, null, 4*m]} overflow={"hidden"} ref={boxRef}> 
        <Flex position={"relative"} top={[`${0.4*s}px`, `${0.3*m}`]} left={[`${-0.6*s}px`]} alignItems={"center"} direction={"column"} > 
          <TiltedBox
            size={[s, null, m]} 
            style={[position(0, 0), null, position(0, m-30)]}
            color="white"
            href="/user/myinfo"
          >
            {data.as == "competitor" ? "Advisor" : "My Info"}
          </TiltedBox>

          <TiltedBox 
            size={[s, null, m]} 
            style={[position(0, m+40), null, position(-30, 2*m-60)]}
            color="white"
            href="/user/status"
          > 
            Status
          </TiltedBox>

          <TiltedBox 
            size={[s, null, m]} 
            style={[position(0, 0), null, position(-m-30, 0)]}
            color="white"
            href={data.as == 'competitor' ? "/user/myteam" : "/user/observer"}
          > 
            {data.as == "competitor" ?  
              "Team" : "Traveling"
            }
          </TiltedBox>

          <TiltedBox 
            size={[s, null, m]} 
            style={[position(0, m+40), null, position(-m-60, m-30)]}
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

const Page: NextPage = () => {
  let { data, mutate } = useSWR('/api/user/register', fetcher)
  
  if (!data || !data.as) {
    return (
      <Layout>
        <Center flexDir={"column"}>
          <Heading> Welcome to SIMPIC 2024  </Heading>
          <Text mt={"10"} fontSize={"xl"}> You are registering as ... </Text>
          <Text mt={"2"} fontSize={"md"}> You cannot change it later </Text>
          <Flex mt={5} w={"100%"} justify={"space-around"} direction={["column", "row"]}>
            <Button m={2} onClick={async ()=>{
              await httpReq('/api/user/register', "POST", {as: 'competitor'})
              await mutate({as: 'competitor'})
            }}> A Competitor </Button>
            <Button m={2} onClick={async ()=>{
              await httpReq('/api/user/register', "POST", {as: 'observer'})
              await mutate({as: 'observer'})
            }}> An Observer </Button>
          </Flex>
        </Center>
      </Layout>
    )
  }

  return (
    <Home />
  )
}

export default Page

import { Heading } from "@chakra-ui/react"
import { NextPage } from "next"
import Layout from "../../components/layout"
import TiltedBox from "../../components/tiltedBox"

const Home: NextPage = () => {
  return (
    <Layout>
      <Heading size="lg" mb={20}> Welcome Admin </Heading>
      <TiltedBox href="/admin/viewContactRequests" size={[200]} style={[]}> 
        <Heading size="md"> view contact requests </Heading>
      </TiltedBox>
      <TiltedBox href="/admin/stats" size={[200]} style={[]}> 
        <Heading size="md"> current stats </Heading>
      </TiltedBox>
    </Layout>
  )
}

export default Home

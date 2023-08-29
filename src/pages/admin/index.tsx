import { Heading } from "@chakra-ui/react"
import { NextPage } from "next"
import Layout from "../../components/layout"
import TiltedBox from "../../components/tiltedBox"

const Home: NextPage = () => {
  return (
    <Layout>
      <Heading size="lg" mb={20}> This is the admin page, will add functionality to it later on </Heading>
      <TiltedBox href="/admin/viewContactRequests" size={[200]} style={[]}> 
        <Heading size="md"> view contact requests </Heading>
      </TiltedBox>
    </Layout>
  )
}

export default Home

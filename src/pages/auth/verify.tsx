import { Heading, Text } from "@chakra-ui/react"
import Layout from "../../components/layout"

const Verify = () => {

  return (
    <Layout>
      <Heading size={["lg", "xl"]}> Magic Link Sent </Heading>
      <Heading size={["sm", "md"]} mt={2}> Click Login Button sent to the email to get Logged in </Heading>

      <Text mt={5} fontSize={"xs"}> 
        If you did not get an email, look through the junk folder, request a new email, try using different email, or contact the admin
      </Text>
    </Layout>
  )
}

export default Verify

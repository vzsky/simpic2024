import { Box, Heading, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import Layout from "../../components/layout"
import useSWR from "swr"
import { fetcher } from "../../helper/client"

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/admin/countTeam", fetcher) 
  return (
    <Layout>
      <Heading size="lg" mb={5}> Statistics </Heading>
      <Box>
        <Heading size="md"> 
          There is currently
          <Text as={"span"} color={"orange.400"}> {data && data.count} teams </Text>
          that had submitted the registration.
        </Heading>
      </Box>
    </Layout>
  )
}

export default Home

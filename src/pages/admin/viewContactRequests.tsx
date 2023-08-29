import { Box, Heading, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import Layout from "../../components/layout"
import useSWR from "swr"
import { fetcher } from "../../helper/client"

const ContactCard = ({contact: {subject, name, email, content}}: any) => (
  <Box background={'dark.600'} p={5} mt={2}> 
    <Heading> {subject} </Heading> 
    <Text> from {name} email: {email} </Text>
    <Text> {content} </Text>
  </Box>
)

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/admin/viewContactRequests", fetcher) 
  return (
    <Layout>
      <Heading size="lg" mb={20}> View Contact Requests </Heading>
      <Box>
        {data && data.allContacts && 
          data.allContacts.map((c: any, ind: number) => (<ContactCard key={ind} contact={c} />))
        }
      </Box>
    </Layout>
  )
}

export default Home

import { Box, Heading } from "@chakra-ui/react"
import { NextPage } from "next"
import Layout from "../../components/layout"
import Link from 'next/link'
import { MotionBox } from "../../components/motionFactory"

const ClickBox = ({label, href} : { href: string, label: string}) => (
  <Link href={href}> 
    <MotionBox 
      my={3} p={3} 
      border={"2px dashed"} 
      _hover={{bgColor: "orange.300", color: "green.900"}}
      whileHover={{ scale: 1.02 }}
    >
      <Heading size="md"> {label} </Heading>
    </MotionBox>
  </Link>
) 

const Home: NextPage = () => {
  return (
    <Layout>
      <Heading size="lg" mb={20}> Welcome Admin </Heading>
      <ClickBox href="/admin/viewContactRequests" label="View Contact Requests" /> 
      <ClickBox href="/admin/stats" label="Current Statistics" /> 
    </Layout>
  )
}

export default Home

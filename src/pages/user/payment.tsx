import { NextPage } from "next";
import Layout from "../../components/layout";
import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import useSWR from 'swr'
import { fetcher } from "../../helper/client";
import { Status } from "../api/user/status";
import Link from "next/link";

const combineStatus = (s: Status[]): Status => {
  if (s.some((status) => status == "not-complete")) return "not-complete"
  if (s.some((status) => status == "complete")) return "complete"
  return "submitted"
}

const S = ({s}: {s: Status}) => {
  if (s == "submitted") return (<Heading ml={[5, 2]} fontSize={["15", "20"]} as="span" color="green.500"> CONTINUE TO PAYMENT </Heading>)
  return (<Heading ml={[7, 2]} fontSize={["15", "20"]} as="span" color="orange.500"> NOT SUBMITTED </Heading>)
}

const Competitor = ({status}: any) => (
  <Box mt={10}>
    <Flex direction={['column']}>
      <Heading textAlign={"center"} size={"sm"}> Please check all your information before proceed. </Heading>
      <br/>
      <Center m={3} mb={7} flexDirection="column"> 
        { status?.teams.map((team: any, ind: number) => (<>
          <Heading mt={2} size="sm"> Team {ind+1}: ({team.name})  </Heading>
          <S s={combineStatus([team.contestant1, team.contestant2, team.contestant2, team.teaminfo])} /> 
        </>)) }
      </Center>
      <Center flexDirection={"column"}>
        <Button> <Link href="https://simpic2024-team-id.my.canva.site/team-id"> Check your Team ID </Link> </Button>
        <Button mt={5}> <Link href="#"> Proceed To Payment </Link> </Button>
      </Center>
    </Flex>
  </Box>
)

const Observer = ({status}: any) => (
  <Box mt={10}>
    <Flex direction={['column', null, 'row']}>
      <Heading textAlign={"center"} size={"sm"}> Please check all your information before proceeding. </Heading>
      <br/>
      <Center flexDirection={"column"}>
        <Button> <Link href="https://simpic2024-team-id.my.canva.site/team-id"> Check your Observer ID </Link> </Button>
        <Button isDisabled={status.observer} mt={5}> <Link href="#"> Proceed To Payment </Link> </Button>
      </Center>
    </Flex>
  </Box>
)

const Payment: NextPage = () => {
  const { data: role } = useSWR('/api/user/register', fetcher)
  const { data: status } = useSWR('/api/user/status', fetcher)
  return (
    <Layout>
      <Center w={"100%"} flexDir={"column"}>
        <Heading> Payment </Heading>
        <Heading mt={5} size={["sm"]}> 
          You are registering as 
        </Heading>
        <Heading as={"span"} color={"orange.300"}>
          {role?.as=="competitor" ? " a COMPETITOR" : " an OBSERVER"} 
        </Heading> 

        { role?.as == "competitor" && <Competitor status={status} />}
        { role?.as == "observer" && <Observer status={status} />}

      </Center>
    </Layout>
  )
}

export default Payment

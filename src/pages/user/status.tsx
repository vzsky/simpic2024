import { NextPage } from "next";
import Layout from "../../components/layout";
import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import useSWR from 'swr'
import { fetcher } from "../../helper/client";
import { Status } from "../api/user/status";

const combineStatus = (s: Status[]): Status => {
  if (s.some((status) => status == "not-complete")) return "not-complete"
  if (s.some((status) => status == "complete")) return "complete"
  return "submitted"
}

const S = ({s}: {s: Status}) => {
  if (s == "submitted") return (<Heading ml={[5, 2]} fontSize={["15", "20"]} as="span" color="green.500"> Submitted </Heading>)
  return (<Heading ml={[7, 2]} fontSize={["15", "20"]} as="span" color="orange.500"> Not Submitted </Heading>)
}

const Competitor = ({status}: any) => (
  <Box mt={10}>
    <Flex direction={['column', null, 'row']}>
      <Heading size={"md"}> Advisor Infomation: </Heading> <S s={status?.myinfo} />
    </Flex>
    {status?.teams.map((team: any, ind: number) => (
      <Box mt={3} key={ind}>
        <Flex direction={['column', null, 'row']}>
          <Heading size={"md"}> Team {ind+1} ({team.name}): </Heading>
          <S s={combineStatus([team.contestant1, team.contestant2, team.contestant2, team.teaminfo])} /> 
        </Flex>
        <Box ml={5} mt={1}> 
          <Flex direction={['column', 'row']}>
            <Heading size={"md"}> Contestant 1: </Heading> <S s={team.contestant1}/> 
          </Flex>
          <Flex direction={['column', 'row']}>
            <Heading size={"md"}> Contestant 2: </Heading> <S s={team.contestant2}/> 
          </Flex>
          <Flex direction={['column', 'row']}>
            <Heading size={"md"}> Contestant 3: </Heading> <S s={team.contestant3}/> 
          </Flex>
          <Flex direction={['column', 'row']}>
            <Heading size={"md"}> Team Info: </Heading> <S s={team.teaminfo}/> 
          </Flex>
        </Box>
      </Box>
    ))}
    <Center mt={5}>
      <a href={'/LoA.pdf'} download> <Button>
        Download Letter of Approval
      </Button> </a>
    </Center>
    <Center mt={5}>
      <a href={'/Consent.pdf'} download> <Button>
        Download Consent Form
      </Button> </a>
    </Center>
  </Box>
)

const Observer = ({status}: any) => (<>
    <Flex direction={['column', null, 'row']}>
      <Heading size={"md"}> Personal Infomation: </Heading> <S s={status?.myinfo} />
    </Flex>
    <Flex direction={['column', null, 'row']}>
      <Heading size={"md"}> Traveling Infomation: </Heading> <S s={status?.observer} />
    </Flex>
    <Center mt={5}>
      <a href={'/Consent.pdf'} download> <Button>
        Download Consent Form
      </Button> </a>
    </Center>
</>
)

const Status: NextPage = () => {
  const { data: role } = useSWR('/api/user/register', fetcher)
  const { data: status } = useSWR('/api/user/status', fetcher)
  return (
    <Layout>
      <Center w={"100%"} flexDir={"column"}>
        <Heading> Status </Heading>
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

export default Status

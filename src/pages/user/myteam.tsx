import { NextPage } from "next";
import Layout from "../../components/layout";
import { Box, Button, Center, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import useSWR from "swr";
import { fetcher, httpReq } from "../../helper/client";
import { ITeam } from "../../database/team.model";
import { teamName } from "../../helper/dbInterface";
import Link from "next/link";
import { CloseIcon } from "@chakra-ui/icons";
import { MotionBox } from "../../components/motionFactory";

const TeamBox = ({ind, team, mutate}: any) => (
  <Center>
    <Link href={`/user/team/${ind}`}>
      <MotionBox whileHover={{ scale: 1.02 }} w={"500px"} border={"2px dashed"} bg={"dark.600"} mx={5} p={2}>
        <Heading> Team {ind+1} </Heading>
        <Text ml={3}> {teamName(team)} </Text>
      </MotionBox>
    </Link>
    <Center>
      <IconButton 
        aria-label="delete"
        onClick={async () => {
          await httpReq("/api/user/myteam", "DELETE", { id: team._id }); 
          await mutate()}
        }
        icon={<CloseIcon/>}
      />
    </Center>
  </Center>
)

const MyTeam: NextPage = () => {
  const { data, mutate, error } = useSWR("/api/user/myteam", fetcher)
  return (
    <Layout>
      <Box mt={10}>
      { data && data.teams && data.teams.length == 0 &&
        <Heading> No team has been created yet. Please create a team. </Heading> 
      }
      { data && data.teams && data.teams.length > 0 && 
        data.teams.map((team: ITeam, ind: number) => (
          <TeamBox key={ind} team={team} ind={ind} mutate={mutate} />
        ))
      }
      </Box>
      <Center mt={10}>
        <Button onClick={async () => {
          await httpReq("/api/user/myteam", "POST", {}); 
          await mutate()}
        }> 
          Create New Team 
        </Button>
      </Center>
    </Layout>
  )
}

export default MyTeam

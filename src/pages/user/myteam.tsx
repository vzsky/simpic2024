import { NextPage } from "next";
import Layout from "../../components/layout";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import useSWR from "swr";
import { fetcher, httpReq } from "../../helper/client";
import { ITeam } from "../../database/team.model";
import { teamName } from "../../helper/dbInterface";
import Link from "next/link";

const MyTeam: NextPage = () => {
  const { data, mutate, error } = useSWR("/api/user/myteam", fetcher)
  return (
    <Layout>
      <Box>
      { data && data.teams && data.teams.length == 0 &&
        <Heading> No team has been created. You will be registered as an observer. </Heading> 
      }
      { data && data.teams && data.teams.length > 0 && 
        data.teams.map((team: ITeam, ind: number) => (
          <Box key={ind}> 
            <Heading> Team {ind+1} </Heading>
            <Text> Team {teamName(team)} </Text>
            <Link href={`/user/team/${ind}`}> <Button> Edit Team </Button> </Link>
            <Button onClick={async () => {
              await httpReq("/api/user/myteam", "DELETE", { id: team._id }); 
              await mutate()}
            }> 
              Delete Team 
            </Button> 
          </Box>
        ))
      }
      </Box>
      <Button onClick={async () => {
        await httpReq("/api/user/myteam", "POST", {}); 
        await mutate()}
      }> 
        Create New Team 
      </Button>
    </Layout>
  )
}

export default MyTeam

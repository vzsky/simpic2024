import { NextPage } from "next";
import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import Form from "../../../components/form/form";
import { questions as userinfoQuestions } from "../../../helper/form/userinfo.question";
import { Box, Button, Center, Flex, Heading, Table, TableCaption, TableContainer, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { useState } from "react";
import { Questions } from "../../../components/form/questionType";
import Link from "next/link";
import { selectExcursionRoute } from "../../../helper/data/excursion";
import { selectCheckin } from "../../../helper/data/schedules";

const Accom = () => (
  <Box mt={10}>
    <TableContainer>
      <Table size={"sm"} variant='simple'>
        <TableCaption color={"white"}> Accomodation Price </TableCaption>
        <Thead>
          <Tr>
            <Th color={"white"} >Rooms, Nights</Th>
            <Th color={"white"} isNumeric>Early</Th>
            <Th color={"white"} isNumeric>Regular</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>2 rooms, 3 nights</Td>
            <Td isNumeric>$ 749</Td>
            <Td isNumeric>$ 849</Td>
          </Tr>
          <Tr>
            <Td>2 rooms, 4 nights</Td>
            <Td isNumeric>$ 849</Td>
            <Td isNumeric>$ 949</Td>
          </Tr>
          <Tr>
            <Td>3 rooms, 3 nights</Td>
            <Td isNumeric>$ 899</Td>
            <Td isNumeric>$ 999</Td>
          </Tr>
          <Tr>
            <Td>4 rooms, 3 nights</Td>
            <Td isNumeric>$ 1049</Td>
            <Td isNumeric>$ 1149</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  </Box>
)

const teaminfoQuestions: Questions = [
  { type: 'text', name: 'school', label: "School or University Name", required: true },
  { type: 'text', as: "textarea", name: 'address', label: "School of University Address", required: true },
  { type: 'text', name: 'contactname', label: "Primary Contact Name", required: true },
  { type: 'text', name: 'contactemail', label: "Primary Contact Email", required: true },
  { type: 'decoration', Render: Accom },
  { type: 'select', name: 'checkin', label: "Check In Date", choices: selectCheckin },
  { type: 'select', name: 'room', label: "Number of Hotel Rooms", choices: [{ value: "2", label: "2" }, { value: "3", label: "3" }]}, 
  { type: 'decoration', Render: () => (
    <Center>
      <Link href={"https://drive.google.com/drive/folders/1OjS5bUUyhfGwjrukGnvgjG7X9xfNURc1"}>
        <Heading mt={5} fontSize={["12", null, "18"]}> Click to Read More About </Heading>
        <Heading textAlign={"center"}  fontSize={["18", null, "25"]}> Excursion </Heading>
      </Link>
    </Center>
  )},
  { type: 'select', name: 'excursion1', label: "Excursion Preference 1", choices: selectExcursionRoute},
  { type: 'select', name: 'excursion2', label: "Excursion Preference 2", choices: selectExcursionRoute},
  { type: 'select', name: 'excursion3', label: "Excursion Preference 3", choices: selectExcursionRoute},
  { type: 'select', name: 'excursion4', label: "Excursion Preference 4", choices: selectExcursionRoute}, 
]

const MyTeam: NextPage = () => {
  const router = useRouter()
  const teamInd = router.query.ind

  const forms = [
    { url: `/api/user/teamUserinfo?contestant=1&teamind=${teamInd}}`, 
      questions: userinfoQuestions
    },
    { url: `/api/user/teamUserinfo?contestant=2&teamind=${teamInd}}`, 
      questions: userinfoQuestions
    },
    { url: `/api/user/teamUserinfo?contestant=3&teamind=${teamInd}}`, 
      questions: userinfoQuestions
    },
    { url: `/api/user/teaminfo?teamind=${teamInd}}`, 
      questions: teaminfoQuestions
    },
  ]

  const [ page, setPage ] = useState(0)
  return (
    <Layout>
      <Flex justifyContent="space-evenly" flexWrap={"wrap"}>
        <Button size={["sm", null, "md"]} m={1} variant={page==0?"orange":"green"} onClick={() => setPage(0)}> Contestant 1 </Button>
        <Button size={["sm", null, "md"]} m={1} variant={page==1?"orange":"green"} onClick={() => setPage(1)}> Contestant 2 </Button>
        <Button size={["sm", null, "md"]} m={1} variant={page==2?"orange":"green"} onClick={() => setPage(2)}> Contestant 3 </Button>
        <Button size={["sm", null, "md"]} m={1} variant={page==3?"orange":"green"} onClick={() => setPage(3)}> Team Info </Button>
      </Flex>
      <Form url={forms[page].url} questions={forms[page].questions}/>
      <Center mt={5} w="100%"> <Button onClick={router.reload}> Submit </Button> </Center>
    </Layout>
  )
}

export default MyTeam

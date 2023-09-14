import { NextPage } from "next";
import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import Form from "../../../components/form/form";
import { preSubmit, questions as userinfoQuestions } from "../../../helper/form/userinfo.question";
import { 
  Box, Button, Center, Flex, Heading, Table, TableCaption, TableContainer, Thead, Tr, Th, Tbody, Td, Text, IconButton, useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import { Questions } from "../../../components/form/questionType";
import Link from "next/link";
import { selectExcursionRoute } from "../../../helper/data/excursion";
import { selectCheckin } from "../../../helper/data/schedules";
import useSWR from "swr";
import { TextQuestion } from "../../../components/form/textQuestion";
import { fetcher } from "../../../helper/client";
import { RepeatIcon } from "@chakra-ui/icons";
import SubmitModal from "../../../components/modal";
import { toOptString } from "../../../helper/type";

const Accom = () => (
  <Box mt={10}>
    <TableContainer>
      <Table size={"sm"} variant='simple'>
        <TableCaption color={"white"}> Accommodation Price </TableCaption>
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
            <Td>3 rooms, 4 nights</Td>
            <Td isNumeric>$ 1049</Td>
            <Td isNumeric>$ 1149</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  </Box>
)

const AccomPrice = () => {
  const router = useRouter()
  const teamInd = router.query.ind
  const { data, mutate } = useSWR(`/api/user/teaminfo?teamind=${teamInd}`, fetcher)
  console.log(data)
  let priceNow = (early: number, regular: number) => {
    let now = new Date()
    let treshold = new Date("2023-09-19T00:00:00.000+07:00")
    if (now < treshold) return early
    return regular
  }

  if (!data || !data.checkin || !data.room) return <></>

  let price
  if (data.checkin == '18' && data.room == '2') price = priceNow(749, 849)
  if (data.checkin == '17' && data.room == '2') price = priceNow(849, 949)
  if (data.checkin == '18' && data.room == '3') price = priceNow(899, 999)
  if (data.checkin == '17' && data.room == '3') price = priceNow(1049, 1149)

  return (
    <Center w={"100%"} flexDirection="column">
      <Center mt={5}>
        <Heading size={"md"}> Accommodation Price: {price} </Heading>
        <IconButton m={2} aria-label="refresh" icon={<RepeatIcon/>} onClick={mutate} />
      </Center>
      <Box mt={5} w={"80%"} borderBottom={"2px dashed"} />
    </Center>
  )
}

const teaminfoQuestions: Questions = [
  { type: 'text', name: 'school', label: "School or University Name", required: true },
  { type: 'text', as: "textarea", name: 'address', label: "School of University Address", required: true },
  { type: 'text', name: 'contactname', label: "Primary Contact Name", required: true },
  { type: 'text', name: 'contactemail', label: "Primary Contact Email", required: true },
  { type: 'decoration', Render: Accom },
  { type: 'select', name: 'checkin', label: "Check In Date", choices: selectCheckin, required: true },
  { type: 'decoration', Render: 
    () => <Flex mx={2}>
      <TextQuestion
        label="Check Out Date"
        errors={{}}
        field={{ value: "21 Jan 2024"} as any}
        disabled
      /> 
    </Flex>
  },
  { type: 'select', name: 'room', label: "Number of Hotel Rooms (2 persons / room)", choices: [{ value: "2", label: "2" }, { value: "3", label: "3" }], required: true}, 
  { type: 'decoration', Render: () => <AccomPrice/> },
  { type: 'decoration', Render: () => (
    <Center>
      <Link href={"https://drive.google.com/drive/folders/1OjS5bUUyhfGwjrukGnvgjG7X9xfNURc1"}>
        <Heading mt={5} fontSize={["12", null, "18"]}> Click to Read More About </Heading>
        <Heading textAlign={"center"}  fontSize={["18", null, "25"]}> Excursion </Heading>
      </Link>
    </Center>
  )},
  { type: 'select', name: 'excursion1', label: "Excursion Preference 1", choices: selectExcursionRoute, required: true},
  { type: 'select', name: 'excursion2', label: "Excursion Preference 2", choices: selectExcursionRoute, required: true},
  { type: 'select', name: 'excursion3', label: "Excursion Preference 3", choices: selectExcursionRoute, required: true},
  { type: 'select', name: 'excursion4', label: "Excursion Preference 4", choices: selectExcursionRoute, required: true}, 
]

const MyTeam: NextPage = () => {
  const router = useRouter()
  let { data: submit } = useSWR('/api/user/status', fetcher)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ page, setPage ] = useState(0)

  const teamInd = toOptString(router.query.ind)
  if (!teamInd) return <></>

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

  const disabled =  page < 3 
    ? (submit && submit.teams && submit.teams[teamInd] && submit.teams[teamInd][`contestant${page+1}`] === "submitted")
    : (submit && submit.teams && submit.teams[teamInd] && submit.teams[teamInd].teaminfo === "submitted")
    

  const formid = page < 3 
    ? `team-${teamInd}-${page+1}`
    : `teaminfo-${teamInd}`

  return (
    <Layout>
      <Flex justifyContent="space-evenly" flexWrap={"wrap"}>
        <Button size={["sm", null, "md"]} m={1} variant={page==0?"orange":"green"} onClick={() => setPage(0)}> Contestant 1 </Button>
        <Button size={["sm", null, "md"]} m={1} variant={page==1?"orange":"green"} onClick={() => setPage(1)}> Contestant 2 </Button>
        <Button size={["sm", null, "md"]} m={1} variant={page==2?"orange":"green"} onClick={() => setPage(2)}> Contestant 3 </Button>
        <Button size={["sm", null, "md"]} m={1} variant={page==3?"orange":"green"} onClick={() => setPage(3)}> Team Info </Button>
      </Flex>
      <Form preSubmit={preSubmit} url={forms[page].url} questions={forms[page].questions} disabled={disabled}/>
      <Center mt={5} w="100%"> 
        <Button isDisabled={disabled} onClick={onOpen}> Submit </Button>
      </Center>
      <SubmitModal formid={formid} isOpen={isOpen} onClose={onClose} Header={() => (
        <Heading> {page < 3 ? `Contestant ${page+1}` : "Team"} Info Submission </Heading>
      )} Body={() => (
        <Text> Once submitted, the information cannot be changed. </Text>
      )}/>
    </Layout>
  )
}

export default MyTeam

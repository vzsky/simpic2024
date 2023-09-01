import { Box, Button, Center, Flex, Heading, Icon, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { NextPage } from "next"
import Layout from "../components/layout"
import { useState } from "react"
import { FaLocationArrow } from "react-icons/fa"
import { GiClothes } from "react-icons/gi"
import { MotionBox, MotionFlex } from "../components/motionFactory"
import { schedules, Schedule } from "../helper/data/schedules"

const TableRow = ({schedule}: {schedule: Schedule}) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!open)
  return (
    <Tr _hover={{color: "orange.200"}} onClick={toggleOpen}>
      <Td> 
        <MotionBox layout="position"> {schedule.time} </MotionBox>
      </Td>
      <Td> 
        <MotionBox layout="position">
          <Text align="right"> {schedule.title} </Text>
          {open && 
            <MotionFlex 
              mt={2} color="orange.200" 
              justifyContent="end" alignItems="center" 
              w={"100%"}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Icon boxSize={'15px'} as={FaLocationArrow} /> 
              <Text fontSize={12} ml={1}> {schedule.venue} </Text>
              {/* 
                <Icon boxSize={'15px'} as={GiClothes} ml={5}/> 
                <Text fontSize={12} ml={1}> {schedule.clothes} </Text>
              */}
            </MotionFlex>
          }
        </MotionBox>
      </Td>
    </Tr>
  )
}

// const Itinerary = ({schedules} : {schedules: Schedule[][]}) => (
//   <Flex>
//     <TableContainer>
//       <Table w={[800]} overflow={"hidden"} colorScheme="green" variant='simple'>
//         <Thead>
//           <Tr> <Th w={"21%"}> </Th> <Th> </Th> </Tr> 
//         </Thead>
//         {schedules.map((day, ind) => (<>
//           <Thead>
//             <Tr>
//               <Th colSpan={2} fontSize="lg" color="white"> Day {ind} : {ind+17} Jan 2024</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {day.map((schedule, ind) => (
//               <TableRow key={ind} schedule={schedule} />
//             ))}
//           </Tbody>
//         </>))}
//       </Table>
//     </TableContainer>
//   </Flex>
// )

const Itinerary = ({schedules} : {schedules: Schedule[][]}) => {
  const [selector, setSelector] = useState(1)
  return (
    <Flex direction="column">
      <Flex justifyContent="space-evenly">
        <Button variant={selector==0?"orange":"green"} onClick={() => setSelector(0)}> Day 0 </Button>
        <Button variant={selector==1?"orange":"green"} onClick={() => setSelector(1)}> Day 1 </Button>
        <Button variant={selector==2?"orange":"green"} onClick={() => setSelector(2)}> Day 2 </Button>
        <Button variant={selector==3?"orange":"green"} onClick={() => setSelector(3)}> Day 3 </Button>
        <Button variant={selector==4?"orange":"green"} onClick={() => setSelector(4)}> Day 4 </Button>
      </Flex>
      <TableContainer>
        <Table w={[800]} overflow="hidden" colorScheme="green" variant="simple">
          <Thead>
            <Tr> <Th w={"30%"}> </Th> <Th> </Th> </Tr>
          </Thead>
          <Thead>
            <Tr>
              <Th colSpan={2} fontSize="lg" color="white">
                <Flex justifyContent="space-between">
                  <Text> Day {selector} : {selector + 17} Jan 2024 </Text>
                  <Flex> 
                    <Icon boxSize={'15px'} as={GiClothes}/> 
                    <Text fontSize={12} ml={1}> {schedules[selector][0].clothes} </Text>
                  </Flex>
                </Flex>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {schedules[selector].map((schedule, ind) => (
              <TableRow key={ind} schedule={schedule} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  )
}

const Excursion = () => {
  const [ route, setRoute ] = useState(0)
  return (
    <Box>
      <Text>
After enjoying all of the cultural activities and tiring from the intense competition, get ready to meet the most exciting highlights of SIMPIC 2024 as we embark on a captivating journey to explore numerous tourist attractions, which are deliberately chosen and arranged into four routes to suit your interests. A glimpse of the cultural heritage of Thailand, the history of Thailand in the fresh learning experience and classical architecture, a hidden green oasis with canalside lifestyle on the outskirts of Bangkok, or captivating street art and various galleries.
<br/><br/>
It’s your choice! Choose one of these and enjoy your time with friends on this unforgettable trip. We are all waiting to welcome you to Thailand.
      </Text>
    </Box>
  )
}

export const Program = () => {
  return (
    <Center flexDirection={"column"}>
      <Heading size="3xl"> PROGRAM </Heading>

      <Flex w={"100%"} direction={"column"} alignItems={["start", "start", "center"]} mt={5}>
        <Heading my={3} size={["md", "xl", "lg"]}> TIMETABLE </Heading>
        <Itinerary schedules={schedules} />
      </Flex>

      <Flex w={"100%"} direction={"column"}  alignItems={["start", "start", "center"]} mt={5}>
        <Heading my={3} size={["md", "xl", "lg"]}> EXCURSION </Heading>
        <Excursion />
      </Flex> 

    </Center>
  )
}

const ProgramPage: NextPage = () => {
  return (
    <Layout>
      <Program />
    </Layout>
  )
}

export default ProgramPage

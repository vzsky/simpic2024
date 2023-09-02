import { Box, Button, Center, Flex, Heading, Icon, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { NextPage } from "next"
import Layout from "../components/layout"
import { useState } from "react"
import { FaLocationArrow } from "react-icons/fa"
import { GiClothes } from "react-icons/gi"
import { MotionBox, MotionFlex } from "../components/motionFactory"
import { schedules, Schedule } from "../helper/data/schedules"
import { AnimatePresence, motion } from "framer-motion"

const TableRow = ({schedule}: {schedule: Schedule}) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!open)
  return (
    <MotionFlex 
      layout="position"
      _hover={{color: "orange.200"}} 
      onClick={toggleOpen} 
      justifyContent={"space-between"}
      borderBottom="1px solid"
      borderColor={"white"}
      flexDirection={["column", "row"]}
      my={[0, 5]}
    >
      <Box w={["100%", "30%"]}>
        <Text> {schedule.time} </Text>
      </Box>
      <MotionBox layout="position" w={["100%", "70%"]}>
        <Text mb={2} align={"right"}> {schedule.title} </Text>
        <AnimatePresence>
          {open && 
            <MotionFlex 
              color="orange.200" 
              w={"100%"}
              position={open ? "relative" : "absolute"}
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ opacity: { duration: 0.2}, height: { duration: 0.2 }, y: { duration: 0.5} }}
              alignItems={"end"}
              justifyContent={"end"}
              flexDirection={"row"}
            >
              <Icon mt={"3px"} alignSelf={"start"} boxSize={'12px'} as={FaLocationArrow} /> 
              <Text mb={2} whiteSpace={["pre", null, "normal"]} align={'right'} fontSize={12} ml={1}> {schedule.venue} </Text>
            </MotionFlex>
          }
        </AnimatePresence>
      </MotionBox>
    </MotionFlex>
  )
}

/*
      <MotionBox layout="position"> 
        <Text fontSize={'md'}> {schedule.time} </Text>
      </MotionBox>
      <MotionBox layout> 
        <MotionBox layout>
          <Text fontSize={["sm", "md"]} align="right"> {schedule.title} </Text>
        </MotionBox>
        {open && 
          <MotionFlex 
            mt={2} mb={2} color="orange.200" 
            w={"100%"}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            alignItems={"end"}
            justifyContent={"end"}
            flexDirection={"row"}
          >
            <Icon mt={'2px'} alignSelf={"end"} boxSize={'15px'} as={FaLocationArrow} /> 
            <Text whiteSpace={["pre", null, "normal"]} align={'right'} fontSize={12} ml={1}> {schedule.venue} </Text>
          </MotionFlex>
        }
      </MotionBox>
*/

const Itinerary = ({schedules} : {schedules: Schedule[][]}) => {
  const [selector, setSelector] = useState(1)
  return (
    <Flex direction="column" w={["100%"]} maxW="100%">
      <Flex justifyContent="space-evenly" flexWrap={"wrap"}>
        <Button size="sm" m={1} variant={selector==0?"orange":"green"} onClick={() => setSelector(0)}> Day 0 </Button>
        <Button size="sm" m={1} variant={selector==1?"orange":"green"} onClick={() => setSelector(1)}> Day 1 </Button>
        <Button size="sm" m={1} variant={selector==2?"orange":"green"} onClick={() => setSelector(2)}> Day 2 </Button>
        <Button size="sm" m={1} variant={selector==3?"orange":"green"} onClick={() => setSelector(3)}> Day 3 </Button>
        <Button size="sm" m={1} variant={selector==4?"orange":"green"} onClick={() => setSelector(4)}> Day 4 </Button>
      </Flex>
      <MotionBox w={['100%']} overflow="hidden"> 
        <MotionBox fontSize={["sm", "lg"]} color="white">
          <MotionFlex pt={5} pb={5} justifyContent={"space-between"} flexDirection={['column', 'row']}>
            <Heading fontSize={[10, 12]} mt={[0, 2]}> Day {selector} : {selector + 17} Jan 2024 </Heading>
            <Flex mt={2} alignSelf={"end"}> 
              <Icon boxSize={'15px'} as={GiClothes}/> 
              <Heading whiteSpace={'pre'} fontSize={[8, 12]} ml={1}> {schedules[selector][0].clothes} </Heading>
            </Flex>
          </MotionFlex>
        </MotionBox>
        <MotionBox>
          {schedules[selector].map((schedule, ind) => (
            <TableRow key={selector * 1000 + ind} schedule={schedule} />
          ))}
        </MotionBox>
      </MotionBox>
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

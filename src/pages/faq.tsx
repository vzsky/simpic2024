import { Center, Flex, Heading, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import Layout from "../components/layout"
import { useState } from "react"
import { MotionBox } from "../components/motionFactory"
import { AnimatePresence, LayoutGroup } from "framer-motion"

type QuestionProp = {
  ind: number, 
  question: { q: string, a: string }
  open: boolean, 
  onClick: () => void
}

const Question = ({question, ind, open, onClick}: QuestionProp) => {
  return (
    <MotionBox
      m={2}
      cursor={'pointer'}
      border="dashed"
      onClick={onClick}
      layout
    >
      <MotionBox
        p={2}
        layout="position"
        bg="dark.700"
        position="relative"
        zIndex={1000}
      >
        <Heading size="md"> Question {ind+1}: </Heading> 
        <Text> {question.q} </Text>
      </MotionBox>
      <AnimatePresence>
        { open && 
          <MotionBox 
            p={2}
            bg={"dark.500"}
            initial={{ y: -10 }}
            animate={{ y: 0, }}
            exit={{opacity: 0 }}

            // @ts-ignore
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Text whiteSpace={"pre-wrap"}> {question.a} </Text>
          </MotionBox>
        }
      </AnimatePresence>
    </MotionBox>
  )
}

const questions = [
  {
    q: "What are the registration fees included ?",
    a: "Registration fees cover all expenses from January 18th to 21st, 2024, encompassing food, lodging, tour activities, and more. In summary, no additional charges apply for attending SIMPIC following registration."
  }, 
  {
    q: "For each university, how many teams can participate in the competition ?", 
    a: "There is no restriction on the number of teams that a university can enter into the competition."
  }, 
  {
    q: "Can clinical medical students join the competition ?", 
    a: "Absolutely! Clinical medical students are welcome to partake in the competition, provided they are enrolled in their respective universities.",
  }, 
  {
    q: "Are there any requirements or essays needed in order to join the competition?",
    a: "Only a letter of approval (or \"statement\") and PDPA consent are required for SIMPIC registration.",
  },
  {
    q: "Can participants modify their registration details, such as team composition or accommodation preferences, after they have registered?", 
    a: "We'd like to inform you that participants are welcome to modify their registration details, including team composition and accommodation preferences, before finalizing and submitting their application. It's important to review and ensure accuracy before hitting the \"submit\" button, as changes cannot be accommodated after submission."
  }, 
  {
    q: "What are check-in and check-out times for accommodations?", 
    a: "Delegates can start checking in at ……………",
  },
  {
    q: "Will transportation be provided for the tour activities, or should participants arrange their own transportation?",
    a: "We deeply appreciate your query regarding transportation arrangements for the upcoming event. It is our pleasure to inform you that transportation will indeed be provided for all activities scheduled within the competition venue, tour activities, and the exam itself. This is to ensure a seamless experience for all participants. \n\n However, we recommend that participants personally handle transportation arrangements from the airport. This will allow competitors to immerse themselves in the Thai experience and tailor their transportation and schedule according to their flight and preferences."
  }, 
  {
    q: "What is the cancellation policy for the event? Will participants receive a refund if they are unable to attend after registering ?", 
    a: "I appreciate your interest in the event and your concern about the cancellation policy. However, I regret to inform you that we have a strict no-refund policy for this event. We understand that unexpected circumstances can arise, but the logistics and planning involved in organizing the event prevent us from offering refunds to participants who are unable to attend after registering. We've taken this decision to ensure the fairness and consistency of our policy for all participants. While we cannot provide refunds, we do encourage participants to consider their availability and commitment before registering. If you have any further questions or concerns, please feel free to reach out to us, and we'd be happy to assist you."
  }
]

const FAQ: NextPage = () => {
  const [ select, setSelect ] = useState(-1)
  return (
    <Layout>
      <Center flexDirection={"column"}>
        <Heading size="3xl"> FAQ </Heading>
        <Flex flexDirection="column" mt={5} w={['100%', '60%']}>
          <LayoutGroup>
            {questions.map((question, ind) => (
              <Question 
                question={question}
                key={ind} 
                ind={ind}
                open={select==ind}
                onClick={() => setSelect(select==ind ? -1 : ind)}
              />
            ))}
          </LayoutGroup>
        </Flex>
      </Center>
    </Layout>
  )
}

export default FAQ

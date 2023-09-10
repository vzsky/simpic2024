import { NextPage } from "next";
import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import Form from "../../../components/form/form";
import { questions as userinfoQuestions } from "../../../helper/form/userinfo.question";
import { Button, Center, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Questions } from "../../../components/form/questionType";

const teaminfoQuestions: Questions = [
  { type: 'text', name: 'school', label: "School or University Name" },
  { type: 'text', as: "textarea", name: 'address', label: "School of University Address" },
  { type: 'text', name: 'contact', label: "Primary Contact Email" },
  { type: 'text', name: 'flight', label: "Flight" },
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

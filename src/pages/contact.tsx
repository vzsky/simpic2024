import { NextPage } from "next"
import Layout from "../components/layout"
import { Box, Button, Center, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react"
import Form from "../components/form/form"
import { Questions } from "../components/form/questionType"

const questions: Questions = [
  { type: 'text', name: 'email', label: 'email', placeholder: "email@example.com", width: [200, 300, 400] },
  { type: 'text', name: 'name', label: 'name', placeholder: "your name", width: [200, 300, 400]},
  { type: 'text', name: 'subject', label: 'subject', width: [200, 300, 400]},
  { type: 'text', name: 'content', label: 'content', as:"textarea", height:100, width: [200, 300, 400] }
]

const Contact: NextPage = () => {
  return (
    <Layout>
      <Center flexDirection={"column"}>
        <Heading size="3xl"> Contact </Heading>
        <Form url="/api/contact" questions={questions} shouldSubmitOnChange={false} />
      </Center>
    </Layout>
  )
}

export default Contact

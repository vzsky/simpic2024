import { NextPage } from "next"
import Layout from "../components/layout"
import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, Image, Input, Text } from "@chakra-ui/react"
import Form from "../components/form/form"
import { Questions } from "../components/form/questionType"

const questions: Questions = [
  { type: 'text', name: 'email', label: 'email', placeholder: "email@example.com", width: [200, 300, 400] },
  { type: 'text', name: 'name', label: 'name', placeholder: "your name", width: [200, 300, 400]},
  { type: 'text', name: 'subject', label: 'subject', width: [200, 300, 400]},
  { type: 'text', name: 'content', label: 'message', placeholder: "Leave your message here...", as:"textarea", height:100, width: [200, 300, 400] }
]

const Contact: NextPage = () => {
  return (
    <Layout>
      <Center flexDirection={"column"}>
        <Heading size="3xl"> Contact </Heading>
        <Flex maxW={'650px'} direction={["column", "row"]} mt={5} justifyContent={"center"} alignItems={"center"}>
          <Image src="/logo.png" alt="logo" width={["100px", "120px", "180px"]} height={["100px", "120px", "180px"]} />
          <Box mt={[5, 0]} ml={[0, 5]}> 
            <Heading size="xl"> SIMPIC 2024 </Heading>  
            <Heading mt={2} size={["xs", "sm"]}> Siriraj International Medical Microbiology, Parasitology, and Immunology Competition </Heading>  
            <Text mt={5} textAlign="justify"> As a prestigious and globally recognized event, we take immense pride in helding space and opportunities that bring together brilliant minds in the fields of microbiology, parasitology, and immunology from all around the world.</Text>  
          </Box> 
        </Flex>
        <Heading mt={10} size="xl"> Leave a Message </Heading>   
        <Form url="/api/contact" questions={questions} shouldSubmitOnChange={false} />
      </Center>
    </Layout>
  )
}

export default Contact

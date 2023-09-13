import { NextPage } from "next";
import Layout from "../../components/layout";
import Form from "../../components/form/form";
import { preSubmit, questions } from '../../helper/form/userinfo.question'
import { Button, Center, Heading, Text, useDisclosure } from "@chakra-ui/react";
import SubmitModal from "../../components/modal";
import useSWR from 'swr'
import { fetcher } from "../../helper/client";

const MyInfo: NextPage = () => {
  let { data } = useSWR('/api/user/register', fetcher)
  let { data: submit } = useSWR('/api/user/status', fetcher)
  let disabled = submit && submit.myinfo==="submitted"
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Layout>
      <Form preSubmit={preSubmit} url={"/api/user/myinfo"} questions={questions} disabled={disabled} />
      <Center mt={5} w="100%">
        <Button isDisabled={disabled} onClick={onOpen}> Submit </Button>
      </Center>
      <SubmitModal formid="userinfo" isOpen={isOpen} onClose={onClose} Header={() => (
        <Heading> {data.as == "competitor" ? "Advisor" : "Personal"} Info Submission </Heading>
      )} Body={() => (
        <Text> Once submitted, the information cannot be changed. </Text>
      )}/>
    </Layout>
  )
}

export default MyInfo

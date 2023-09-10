import { NextPage } from "next";
import Layout from "../../components/layout";
import Form from "../../components/form/form";
import { questions } from '../../helper/form/userinfo.question'
import { Button, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";

const MyInfo: NextPage = () => {
  const router = useRouter()
  return (
    <Layout>
      <Form url={"/api/user/myinfo"} questions={questions} />
      <Center mt={5} w="100%"> <Button onClick={router.reload}> Submit </Button> </Center>
    </Layout>
  )
}

export default MyInfo

import { NextPage } from "next";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import Form from "../../components/form/form";
import { Button, Center, Flex, Heading } from "@chakra-ui/react";
import { Questions } from "../../components/form/questionType";
import Link from "next/link";
import { selectExcursionRoute } from "../../helper/data/excursion";
import { selectCheckin } from "../../helper/data/schedules";
import { TextQuestion } from "../../components/form/textQuestion";

const observerQuestions: Questions = [
  { type: 'text', name: 'organization', label: "Organization" },
  { type: 'select', name: 'checkin', label: "Check In Date", choices: selectCheckin },
  { type: 'decoration', Render: 
    () => <TextQuestion
      label="Check Out Date"
      errors={{}}
      field={{ value: "20 Jan 2024"} as any}
      disabled
    /> 
  },
  { type: 'decoration', Render: () => (
    <Center>
      <Link href={"https://drive.google.com/drive/folders/1OjS5bUUyhfGwjrukGnvgjG7X9xfNURc1"}>
        <Heading mt={5} fontSize={["12"]}> Click to Read More About </Heading>
        <Heading textAlign={"center"}  fontSize={["18"]}> Excursion </Heading>
      </Link>
    </Center>
  )},
  { type: 'select', name: 'excursion1', label: "Excursion Preference 1", choices: selectExcursionRoute},
  { type: 'select', name: 'excursion2', label: "Excursion Preference 2", choices: selectExcursionRoute},
  { type: 'select', name: 'excursion3', label: "Excursion Preference 3", choices: selectExcursionRoute},
  { type: 'select', name: 'excursion4', label: "Excursion Preference 4", choices: selectExcursionRoute}, 
]

const Observer: NextPage = () => {
  const router = useRouter()

  return (
    <Layout>
      <Form url={'/api/user/observer'} questions={observerQuestions}/>
      <Heading> The accomodation fee is $ 299 </Heading>
      <Center mt={5} w="100%"> <Button onClick={router.reload}> Submit </Button> </Center>
    </Layout>
  )
}

export default Observer

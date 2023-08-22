import { Container } from "@chakra-ui/react"
import { useRouter } from "next/router";
import Layout from "../../components/layout"

const Error = () => {
  const router = useRouter()
  const error = router.query.error
    ? router.query.error
    : "no error message"
  
  return (
    <Layout>
      <Container m={5}>
        There was an error in signing in.
        Error message: {error}
      </Container>
    </Layout>
  )
}

export default Error

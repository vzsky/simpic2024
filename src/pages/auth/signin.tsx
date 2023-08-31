import { Button, Container, Heading, Input, Text } from "@chakra-ui/react"
import { signIn } from "next-auth/react"
import { useState } from "react"
import Layout from "../../components/layout"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const handleChange = (e:any) => setEmail(e.target.value)
  const handleClick = () => {signIn("email", {email})}

  // const router = useRouter()
  // const error = router.query.error
  // console.log(error)

  return (
    <Layout>
      <Heading size={["lg", "xl"]}> No need for password </Heading>
      <Heading size={["sm", "md"]} mt={2}> Sign up or Log in with your email </Heading>
      
      <Text mt={5}> Enter your email: </Text>
      <Input width="90%" type="email" placeholder={"your@email.com"} value={email} onChange={handleChange}/>
      <Button mt={3} variant="solid" onClick={handleClick}>
        Send Login Link
      </Button>
    </Layout>
  )
}

export default SignIn

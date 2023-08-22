import { Button, Container, Input } from "@chakra-ui/react"
import { signIn } from "next-auth/react"
// import { useRouter } from "next/router"
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
      <Container m={5}>
        Please enter your email:
        <Input width="90%" type="email" placeholder={"your@email.com"} value={email} onChange={handleChange}/>
        <Button mt={3} variant="solid" onClick={handleClick}>
          Next
        </Button>
      </Container>
    </Layout>
  )
}

export default SignIn

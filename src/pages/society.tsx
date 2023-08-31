import { NextPage } from "next"
import Layout from "../components/layout"
import { Center, Flex, Heading, Icon, Image } from "@chakra-ui/react"
import Link from "next/link"
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri" 

const SocialMedia = () => (
  <Flex mt={5} direction="row" alignSelf={["end", null, "center"]} justifyContent={"center"} alignItems={"center"}>
    <Link href="https://www.facebook.com/SIMPICOfficial"> 
      <Icon boxSize={['25px', '50px']} mx={[2, 3, 5]} as={FaFacebook} />
    </Link>
    <Link href="https://www.tiktok.com/@simpic_official">
      <Icon boxSize={['18px', '45px']} mx={[2, 3, 5]} as={FaTiktok} />
    </Link>
    <Link href="https://www.instagram.com/simpic_official/">
      <Icon boxSize={['25px', '50px']} mx={[2, 3, 5]} as={RiInstagramFill} />
    </Link>
    <Link href="/"> 
      <Icon boxSize={['30px', '60px']} mx={[2, 3, 5]} as={FaYoutube} /> 
    </Link>
  </Flex>
)

const Pandemos = () => (
  <Flex w={"100%"} alignItems={"center"} justifyContent={"space-around"} direction={["column", "column", "row"]}>
    <Link href={"/pandemos1.pdf"}>
      <Image src={"/pandemos1.jpg"} alt={"pandemos 1"} w={[200, 250, 140, 200]} m={[5, null, 2]} />
    </Link>
    <Link href={"/pandemos2.pdf"}>
      <Image src={"/pandemos2.jpg"} alt={"pandemos 2"} w={[200, 250, 140, 200]} m={[5, null, 2]}/>
    </Link>
    <Link href={"/pandemos3.pdf"}>
      <Image src={"/pandemos3.jpg"} alt={"pandemos 3"} w={[200, 250, 140, 200]} m={[5, null, 2]} />
    </Link>
    <Link href={"/pandemos4.pdf"}>
      <Image src={"/pandemos4.jpg"} alt={"pandemos 4"} w={[200, 250, 140, 200]} m={[5, null, 2]} />
    </Link>
  </Flex>
)

const Gallery = () => (
  <Flex>
  </Flex>
)


export const Society = () => {
  return (
    <Center flexDirection={"column"}>
      <Heading size="3xl"> SIMPIC SOCIETY </Heading>

      <Flex w={"100%"} direction={"column"} alignItems={["start", "start", "center"]} mt={5}>
        <Heading my={3} size={["md", "xl", "lg"]}> BE PART OF OUR COMMUNITY </Heading>
        <SocialMedia />
      </Flex>

      <Flex w={"100%"} direction={"column"}  alignItems={["start", "start", "center"]} mt={5}>
        <Heading my={3} size={["md", "xl", "lg"]}> PANDEMOS </Heading>
        <Pandemos />
      </Flex> 

      <Flex w={"100%"} direction={"column"}  alignItems={["start", "start", "center"]} mt={5}>
        <Heading my={3} size={["md", "xl", "lg"]}> GALLERY </Heading>
        <Gallery />
      </Flex>

    </Center>
  )
}

const SocietyPage: NextPage = () => (
  <Layout> <Society /> </Layout>
)

export default SocietyPage

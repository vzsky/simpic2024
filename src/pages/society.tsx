import { NextPage } from "next"
import Layout from "../components/layout"
import { Box, Button, Center, Flex, Heading, Icon, Image } from "@chakra-ui/react"
import Link from "next/link"
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri" 
import { motion, useAnimation, useInView } from "framer-motion"
import { MotionBox, MotionFlex } from "../components/motionFactory"
import { useEffect, useRef } from "react"

const fadeLeft = { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }}

export const SocialMedia = () => { 
  const ref = useRef(null)
  const inView = useInView(ref, {once: true})
  const control = useAnimation()

  useEffect(() => {
    if (inView) {
      control.start('animate') 
    }
  })
  return (
    <Box ref={ref}>
    <MotionFlex
      initial="initial"
      animate={control}
      variants={{ animate: { transition: { staggerChildren: 0.1 }}}}
      mt={5} 
      direction="row" 
      alignSelf={["end", null, "center"]} 
      justifyContent={"center"} 
      alignItems={"center"}
    >
      <Link href="https://www.facebook.com/SIMPICOfficial">
        <MotionBox variants={fadeLeft}>
        <Icon _hover={{color: "orange.100"}} boxSize={['25px', '50px']} mx={[2, 3, 5]} as={FaFacebook} />
        </MotionBox>
      </Link>
      <Link href="https://www.tiktok.com/@simpic2024">
        <MotionBox variants={fadeLeft}>
        <Icon _hover={{color: "orange.100"}} boxSize={['18px', '45px']} mx={[2, 3, 5]} as={FaTiktok} />
        </MotionBox>
      </Link>
      <Link href="https://www.instagram.com/simpic_official/">
        <MotionBox variants={fadeLeft}>
        <Icon _hover={{color: "orange.100"}} boxSize={['25px', '50px']} mx={[2, 3, 5]} as={RiInstagramFill} />
        </MotionBox>
      </Link>
      <Link href="https://www.youtube.com/@SIMPICPR"> 
        <MotionBox variants={fadeLeft}>
        <Icon _hover={{color: "orange.100"}} boxSize={['30px', '60px']} mx={[2, 3, 5]} as={FaYoutube} /> 
        </MotionBox>
      </Link>
    </MotionFlex>
    </Box>
  )
}

const Pandemos = () => (
  <Flex w={"90%"} alignItems={"center"} justifyContent={"space-evenly"} direction={["column", "column", "row"]}>
    <Link href={"/pandemos1.pdf"}>
      <Image
        as={motion.img} whileHover={{ scale: 1.1 }} 
        src={"/pandemos1.jpg"} alt={"pandemos 1"} w={[180, 225, 120, 180]} m={[5, null, 2]} 
      />
    </Link>
    <Link href={"/pandemos2.pdf"}>
      <Image 
        as={motion.img} whileHover={{ scale: 1.1 }} 
        src={"/pandemos2.jpg"} alt={"pandemos 2"} w={[180, 225, 120, 180]} m={[5, null, 2]}
      />
    </Link>
    <Link href={"/pandemos3.pdf"}>
      <Image
        as={motion.img} whileHover={{ scale: 1.1 }} 
        src={"/pandemos3.jpg"} alt={"pandemos 3"} w={[180, 225, 120, 180]} m={[5, null, 2]} 
      />
    </Link>
    <Link href={"/pandemos4.pdf"}>
      <Image
        as={motion.img} whileHover={{ scale: 1.1 }} 
        src={"/pandemos4.jpg"} alt={"pandemos 4"} w={[180, 225, 120, 180]} m={[5, null, 2]} 
      />
    </Link>
  </Flex>
)

const Gallery = () => (
  <Flex direction="column" w={"100%"}>

    <Center flexDirection="column" w="100%">
      <Flex direction={["column", "row"]}>
        <Box>
          <Image mx={[0, 5]} my={[1]} mt={[0, null, null, 10]} w={[200, 150, 200, 250]} src={"/simpic12/2.JPG"} alt="" />
        </Box>
        <Box>
          <Image mx={[0, 5]} my={[1]} w={[200, null, null, 350]} src={"/simpic12/3.JPG"} alt="" />
        </Box>
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"} direction={["column", "column", "row"]}>
        <Flex direction={["column", "row"]}>
          <Box>
            <Image mx={[0, 5]} my={[1, null, null, 0]} w={[200, null, 170, 200]} src={"/simpic12/7.JPG"} alt="" />
          </Box>
          <Box>
            <Image mx={[0, 5]} my={[1, 1, 5, 1]} w={[200, 150, 150, 200]} src={"/simpic12/8.JPG"} alt="" />
          </Box>
        </Flex>
        <Box>
          <Image mx={[0, 0, 5]} my={[1]} w={[200, 250, 200]} src={"/simpic12/4.JPG"} alt="" />
        </Box>
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"} direction={["column", "row"]}>
        <Flex direction={["column", "column", "column", "row"]}>
          <Box>
            <Image mx={[0, 5]} my={[1, 5, 0, null]} w={[200, null, null, 300]} src={"/simpic12/5.JPG"} alt="" />
          </Box>
          <Box>
            <Image mx={[0, 5]} my={[1, 5, null, 0]} mt={[0, null, null, 10]} w={[200]} src={"/simpic12/6.JPG"} alt="" />
          </Box>
        </Flex>
        <Box>
          <Image mx={[0, 5]} my={[1, 10, null, 1]} w={[150]} src={"/simpic12/1.JPG"} alt="" />
        </Box>
      </Flex>
    </Center>

    <Flex mt={5} w={"100%"} justifyContent={"center"} alignItems="center">
      <Flex maxW={"500px"} w="100%" justifyContent={"space-around"}>
        <Link href={"https://drive.google.com/drive/folders/1o78d47wZBH1w1rGuyDY5NS9fb7v3kmc9"}> 
          <Button px={2} size={['xs', 'md']}> Day 1 </Button> 
        </Link>
        <Link href={"https://drive.google.com/drive/folders/1pKN7r0SCYLeF5qAtH11JQHCfXmgBL8C5"}>
          <Button px={2} size={['xs', 'md']}> Day 2 </Button>
        </Link>
        <Link href={"https://drive.google.com/drive/folders/1cqGcIg4D3nfAIz5dLLbhP6_YtT56uxx7"}> 
          <Button px={2} size={['xs', 'md']}> Day 3 </Button>
        </Link>
        <Link href={"https://drive.google.com/drive/folders/1TE7A9jZVZ_KEElLk_5PqY9yWrCaBVtAc"}>
          <Button px={2} size={['xs', 'md']}> Day 4 </Button>
        </Link>
      </Flex> 
    </Flex>
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
        <Flex alignItems="center" justifyContent={"center"} w={"100%"}>
          <Pandemos />
        </Flex>
      </Flex> 

      <Flex w={"100%"} direction={"column"}  alignItems={["start", "start", "center"]} mt={5}>
        <Heading my={3} size={["md", "xl", "lg"]}> 12th SIMPIC GALLERY </Heading>
        <Gallery />
      </Flex>

    </Center>
  )
}

const SocietyPage: NextPage = () => (
  <Layout> <Society /> </Layout>
)

export default SocietyPage

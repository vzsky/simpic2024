import { motion, useAnimation, useInView } from "framer-motion"
import { ReactNode, useEffect, useRef } from "react"
import { MotionBox } from "./motionFactory"
import { Box, Flex, Heading, Image, Container } from "@chakra-ui/react"
import Footer from "./footer";

export const SponsorBox = ({children}: {children: ReactNode}) => {
  const ref = useRef(null)
  const inView = useInView(ref, {once: true})
  const control = useAnimation()

  useEffect(() => {
    if (inView) {
      control.start('animate') 
    }
  })

  return (
    <MotionBox ref={ref} initial="initial" animate={control} variants={{animate: {transition: { staggerChildren: 0.1 }}}} mt={5}>
      {children}
    </MotionBox>
  )
}

export const Sponsor = () => {
  const ref = useRef(null)
  const inView = useInView(ref, {once: true})
  const control = useAnimation()

  useEffect(() => {
    if (inView) {
      control.start('animate') 
    }
  })
  return (
    <MotionBox
      ref={ref} initial="initial" animate={control} variants={{animate: {transition: { staggerChildren: 0.1 }}}} mt={'3rem'}
    >
      <Heading as={motion.h2} variants={{initial: {opacity: 0}, animate: {opacity: 1}}} size={'xl'}>
        Organized by
      </Heading>


      <Container maxW={"700px"}>
        <SponsorBox>
          <Flex direction={["column", "row"]} alignItems={"center"} justifyContent={"space-around"} height={[250, 200]}>
            <Image src="/logo.png" alt="SIMPIC" mb={[0, 0]} mx={[0, 8]} width={[100, 125]} />
            <Box display={["none", null, "block"]} >
              <Image src="/mu_si.png" alt="Mahidol University" mx={[0, 10]} width={[430]}/>
            </Box>
            <Box display={["block", null, "none"]} >
              <Image src="/mu_circ.png" alt="Mahidol University" mx={[0, 10]} width={[100, 125]} mb={2}/>
            </Box>
          </Flex>
        </SponsorBox>
      </Container>

      <Container maxW={"450px"}>
        <SponsorBox>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Heading as={motion.h2} variants={{initial: {opacity: 0}, animate: {opacity: 1}}} size={['md', 'lg']} >
              Official Partners
            </Heading>
          </Flex> 
          <Flex direction={["column", "row"]} alignItems={"center"} justifyContent={"space-around"} height={[250, null, 200]}>
            <Image src="/sponsor/gold/AMSA_B.png" alt="AMSA" mx={[0, 8]} width={[100, 145]}/>
            <Image src="/sponsor/gold/SMST_T.png" alt="SMST" mx={[0, 3]} width={[100, 135]} mb={1}/>
          </Flex>
        </SponsorBox>
      </Container>

      <Flex mt={10} justifyContent={"center"} alignItems={"center"}>
        <Heading as={motion.h2} variants={{initial: {opacity: 0}, animate: {opacity: 1}}} size={'lg'} >
          Our Sponsors
        </Heading>
      </Flex> 

      <Container maxW={"450px"}>
        <SponsorBox>
          <Flex direction={["column"]} alignItems={"center"} justifyContent={"space-around"} height={[85, null, null, 100]}>
            <Image src="/sponsor/platinum/Preceptor.png" alt="Preceptor" width={[250, 350, null, 450]} />
          </Flex>
        </SponsorBox>
        <SponsorBox>
          <Flex direction={["row"]} alignItems={"center"} justifyContent={"space-around"}>
            <Image src="/sponsor/gold/MBK.png" alt="MBK" my={2} mb={[0, 0]} mx={[0, 8]} width={[125, 150]} />
            <Image src="/sponsor/gold/MY.png" alt="Meow Yak" mx={[0, 10]} width={[65, 90]}/>
          </Flex>
        </SponsorBox>
        <SponsorBox>
          <Flex display={["flex", null, "none"]} direction={["column"]} alignItems={"space-around"} justifyContent={"space-around"} height={[150, 210]}>
            <Flex mt={[8]} direction={["row"]} alignItems={"center"} justifyContent={"space-around"}>
              <Image src="/sponsor/silver/bertram.png" alt="Bertram" width={[100, 155]} /> 
              <Image src="/sponsor/silver/BNH.png" alt="BNH Hospital" width={[41, 65]} mb={2}/>
              <Image src="/sponsor/silver/Thonburi.svg" alt="Thonburi Hospital" width={[91, 145]}/>
            </Flex>
            <Flex direction={["row"]} alignItems={"center"} justifyContent={"space-around"}>
              <Image src="/sponsor/silver/TMC.png" alt="Thonburi Medical Center" width={[65, 85]} ml={[5]}/>
              <Image src="/sponsor/silver/Alumni.png" alt="Siriraj Alumni" my={5} width={[65, 85]} mr={[5]}/>
            </Flex>
          </Flex>
          <Flex display={["none", null, "flex"]} direction={"row"} alignItems={"space-around"} justifyContent={"space-around"} height={100}>
            <Image src="/sponsor/silver/bertram.png" alt="Bertram" width={[155]} />
            <Image src="/sponsor/silver/BNH.png" alt="BNH Hospital" width={[65]} my={13} pb={2}/>
            <Image src="/sponsor/silver/Thonburi.svg" alt="Thonburi Hospital" width={[165]} my={-2}/>
            <Image src="/sponsor/silver/TMC.png" alt="Thonburi Medical Center" width={[85]} my={2} mr={6} ml={-2}/>
            <Image src="/sponsor/silver/Alumni.png" alt="Siriraj Alumni" width={[85]} my={"18px"}/>
          </Flex>
        </SponsorBox>
        <SponsorBox>
          <Flex direction={["row"]} alignItems={"center"} justifyContent={"space-around"} height={[70]}>
            <Image src="/sponsor/bronze/doubleA.webp" alt="Double A" width={[85, 105]} ml={[2]} /> 
            <Image src="/sponsor/bronze/GPO.svg" alt="GPO" width={[85, 105]}/>
            <Image src="/sponsor/bronze/Lactasoy.svg" alt="Lactasoy" width={[75, 95]}/>
          </Flex>
        </SponsorBox>
      </Container>

    </MotionBox>
  )
}

export const SponsorFooter = () => (
  <Box backgroundColor={"#efede1"}>
  <Box 
    // the gradient is linear(to-br, blue.990, orange.900)
    backgroundImage={`linear-gradient(to-br, rgba(0, 61, 60, 0.2), rgba(122, 104, 0, 0.2)), url("/bg_txt.png")`} 
    color="green.999"
  >
    <Container maxW={'5xl'} pb={10} pt={10}>
      <MotionBox exit={{ opacity: 0 }}>
        <Sponsor />
      </MotionBox>
    </Container>
    <Footer />
  </Box>
  </Box>
)

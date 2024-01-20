import { NextPage } from "next"
import Layout from "../components/layout"
import { Box, Button, Center, Heading, Text, Image, Flex } from "@chakra-ui/react"
import HistoryBox from "../components/historyBox"
import Link from "next/link"
import { LayoutGroup, motion, useAnimation, useInView } from "framer-motion"
import { MotionBox } from "../components/motionFactory"
import { ReactNode, useEffect, useRef } from "react"

export const AboutSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, {once: true})
  const control = useAnimation()

  useEffect(() => {
    if (inView) {
      control.start('animate') 
    }
  })
  return (
    <MotionBox ref={ref} initial="initial" animate={control} variants={{animate: {transition: { staggerChildren: 0.1 }}}} mt={'3rem'}>
      <Heading as={motion.h2} variants={{initial: {opacity: 0}, animate: {opacity: 1}}} size={'xl'}>
        About SIMPIC
      </Heading>
      <Text as={motion.p} variants={{initial:{opacity: 0}, animate:{opacity: 1}}} mt={5} textAlign="justify">
        Welcome to Siriraj International Medical Microbiology, Parasitology, and Immunology Competition (SIMPIC 2024) ! 
        <br/> <br/>
        As a prestigious and globally recognized event, we take immense pride in helding space and opportunities that bring together brilliant minds in the fields of microbiology,  parasitology, and immunology from all around the world. 
        <br/> <br/>
        Our competition serves as a hub for aspiring medical students to showcase their medical knowledge, and forge meaningful connections within the scientific community and international friendships. With a rich tradition of excellence, we are committed to advancing knowledge, promoting collaboration, and driving advancements in these vital disciplines. 
        <br/> <br/>
        Join us in this exciting journey of discovery, learning, and exploration as we collectively strive to push the boundaries of scientific understanding and culture exchanging
      </Text>
    </MotionBox>
  )
}

const HistorySection = () => (
  <Box mt={'3rem'}>
    <LayoutGroup>
      <Heading size={'xl'}>
        History
      </Heading>
      <Center flexDirection={'column-reverse'} mt={5}>
        <HistoryBox year={2012} name={'1st - SIMIC'}>
          SIMIC (Siriraj International Microbiology and Immunology Competition) firstly held in 2011-2012 after Thailand hosted IFMSA's General Assembly. This event sparked the idea among Siriraj medical students, driven by Dr.Janewit Wongboonsin, Dr. Bantawit Sudsanguan, and a dedicated team, to establish an annual international gathering, focusing on 'PLAN' qualities: Publicity, Leadership, Academic Excellence, and Networking. Thus, SIMIC was conceived as a platform for knowledge exchange, growth, and meaningful experiences.
        </HistoryBox>
        
        <HistoryBox year={2013} name={'2nd - SIMPIC'}>
          The dawn of SIMPIC 2nd marks a transformative leap into the world of Simpic City, with the profound addition of parasitology. Like a vibrant cityscape, this edition thrives on diversity and innovation, showcasing the intricate interplay between microbiology, parasitology, and immunology.
        </HistoryBox>
       
        <HistoryBox year={2014} name={'3rd - SIMPIC'}>
          The inception of SIMPIC 3rd ushers in an era of urban simplicity, a celebration of the essence of Simpic City. Amidst the bustling complexities of modernity, this edition draws inspiration from the beauty of simplicity that the city offers. Just as cityscapes are composed of distinct elements, SIMPIC intertwines the 'CITY' principles: Collaboration, Innovation, Teamwork, Youthfulness.
          SIMPIC is more than a competition; it's a canvas where simplicity merges with innovation. As we convene for this edition, let's explore the elegance of simplicity in both science and life, embracing the vibrant spirit of Bangkok City.
        </HistoryBox>
       
        <HistoryBox year={2015} name={'4th - SIMPIC'}/>
       
        <HistoryBox year={2016} name={'5th - SIMPIC'}/>

        <HistoryBox year={2017} name={'6th - SIMPIC'}/>
        
        <HistoryBox year={2018} name={'7th - SIMPIC'}>
          The emergence of SIMPIC 7th heralds a captivating journey into the heart of Thai village traditions, a thematic homage to cultural exchange. After six successful editions, this chapter embraces the essence of the culture of Thailand, where heritage and innovation converge. Much like the diverse threads woven into a traditional fabric, SIMPIC interlaces 'TRADITION' values: Teamwork, Research, Appreciation, Diversity, Innovation, Thai Identity, Inspiration, Open-mindedness, and Networking
          SIMPIC is more than an event; it's a tapestry where cultures blend, ideas flourish, and connections flourish. With this edition, we step into a realm where the past and present unite, fostering not only scientific exploration but also the spirit of Thai village wisdom.
        </HistoryBox>
       
        <HistoryBox year={2019} name={'8th - ???'}/>
       
        <HistoryBox year={2020} name={'9th - [COVID19]'}/>
       
        <HistoryBox year={2021} name={'10th - SIMPICSED'}>
          In 2021, SIMPIC ventured into a new realm with a special edition aptly named SIMPICSED, embracing the virtual domain for an innovative and immersive experience. Navigating through the digital landscape, participants embarked on a journey that transcended geographical boundaries, delving into the world of online connectivity and exploration. While physically apart, we united under the banner of science and discovery, sharing insights and forging connections in ways that only the online world could offer. SIMPICSED marked a remarkable chapter, reflecting our adaptability and commitment to advancing the frontiers of microbiology, parasitology, and immunology even in the face of unprecedented challenges.
        </HistoryBox>

        <HistoryBox year={2022} name={'11th - Online'}/>

        <HistoryBox year={2023} name={'12th - SIMPIC'}>
          The dawn of SIMPIC 12th marks a triumphant return to onsite engagement, a revival after the challenges posed by the pandemic. Echoing the vibrant pulse of contemporary Thai art, this edition draws inspiration from the rich tapestry of local creativity.
          Just as artists breathe life into canvases, SIMPIC enlivens minds, fostering 'CREATE' values: Collaboration, Research Advancement, Exploration, Artistic Expression, Teamwork, and Empowerment.
          The result is SIMPIC, not merely a competition, but a canvas where knowledge intertwines with artistry. As we reconvene in person, let's paint a symphony of innovation and collaboration, celebrating both scientific prowess, culturing exchange and the spirit of Thai artistry.
        </HistoryBox>

        <HistoryBox year={2024} name={'13th - SIMPIC'} defaultOpen>
          <Heading size={'md'}> Journeying 'Into a Small World' of Microbiology, Parasitology, and Immunology. </Heading>
          <Center flexDirection={'column'}>
            <Text size={'md'} mt={5}> Be Part of Our SIMPIC this year </Text>
            <Link href={'/user'}> <Button variant="light" my={3}> Register Now </Button> </Link>
          </Center>
        </HistoryBox>
      </Center>
    </LayoutGroup>
  </Box>
)

export const PresMesSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, {once: true})
  const control = useAnimation()

  useEffect(() => {
    if (inView) {
      control.start('animate') 
    }
  })

  return (
    <MotionBox ref={ref} initial="initial" animate={control} variants={{ animate: { transition: { staggerChildren: 0.1 } } }} mt={'4rem'}>
      <Heading as={motion.h2} variants={{initial: { opacity: 0 }, animate: { opacity: 1 }}} size={'xl'}>
        President Message
      </Heading>
      <Flex direction={["column-reverse", "column-reverse", "column-reverse", "row"]}>
        <Box w={["100%", "100%", "100%", "50%"]}>
          <Text as={motion.p} variants={{initial: { opacity: 0 }, animate: { opacity: 1 }}} mt={5} textAlign="justify">
            With the year gone by, the wait is now done. <br/> Our annual competition is back for everyone! <br/><br/>
            Hello, aspiring participants, <br/> <br/>

            We, on behalf of the SIMPIC organizing committee, extend a warm embrace to medical students from every corner of the world. Welcome to our esteemed international competition, SIMPIC 2024! <br/> <br/>

            Across thirteen years of evolution, this year marks a leap forward in crafting an extraordinary and indelible event, specially customized for medical students. <br/> <br/>

            Mark your calendars for January 18–21, 2024. With meticulous consideration, we've refined the competition rules, drawing from invaluable insights garnered over previous editions. Anticipate a year of heightened thrills, profound engagement, and unparalleled fervor that surpasses all past experiences. <br/> <br/>

            "Join Us for an Unforgettable Journey: A symphony of unique competitions, cultural immersion, and the allure of Bangkok awaits. From the very first note to the final crescendo, let SIMPIC be the canvas where we paint smiles and weave cherished memories together." <br/> <br/>

            Be part of the SIMPIC family! <br/>

            Napak Banditrittidej <br/>
            Presidents of SIMPIC 2024 <br/>

        </Text>
        </Box>

        <Center
            w={["100%", "100%", "100%", "50%"]}
        >
          <Image
            as={motion.img}
            variants={{ initial: { opacity: 0 }, animate: { opacity: 1 }}}
            pl={[0, 0, 0, 5]} mt={5} 
            w={"100%"}
            maxW={["400px", "400px", "400px", "450px"]}
            objectFit={"contain"} 
            src={"pres.jpeg"} 
            alt={"president"} 
          />
        </Center>
      </Flex>
    </MotionBox>
  )
}

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
    <MotionBox ref={ref} initial="initial" animate={control} variants={{animate: {transition: { staggerChildren: 0.1 }}}} mt={'3rem'}>
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
    <MotionBox ref={ref} initial="initial" animate={control} variants={{animate: {transition: { staggerChildren: 0.1 }}}} mt={'3rem'}>
      <Heading as={motion.h2} variants={{initial: {opacity: 0}, animate: {opacity: 1}}} size={'xl'}>
        Sponsored by
      </Heading>

      <SponsorBox>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Heading as={motion.h2} variants={{initial: {opacity: 0}, animate: {opacity: 1}}} size={'lg'} >
            Bronze Tier
          </Heading>
        </Flex> 
        <Flex direction={["column", "row"]} alignItems={"center"} justifyContent={"space-around"} height={[300, 100]}>
          <Image src="/sponsor/bronze/doubleA.webp" alt="Double A" width={[150]} mt={[5, 0]} />
          <Image src="/sponsor/bronze/GPO.svg" alt="GPO" width={[150]}/>
          <Image src="/sponsor/bronze/Lactasoy.svg" alt="Lactasoy" width={[150]}/>
        </Flex>
      </SponsorBox>
      <SponsorBox>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Heading as={motion.h2} variants={{initial: {opacity: 0}, animate: {opacity: 1}}} size={'lg'} >
            Silver Tier
          </Heading>
        </Flex> 

        <Flex display={["flex", null, null, "none"]} direction={["column"]} alignItems={"space-around"} justifyContent={"space-around"} height={[700, 310]}>
          <Flex direction={["column", "row"]} alignItems={"center"} justifyContent={"space-around"}>
            <Image src="/sponsor/silver/bertram.png" alt="Bertram" my={2} width={[200]} mt={[10, 0]} />
            <Image src="/sponsor/silver/BNH.png" alt="BNH Hospital" my={[0, 5]} width={[85]}/>
            <Image src="/sponsor/silver/Thonburi.svg" alt="Thonburi Hospital" width={[170]}/>
          </Flex>
          <Flex direction={["column", "row"]} alignItems={"center"} justifyContent={"space-around"}>
            <Image src="/sponsor/silver/TMC.png" alt="Thonburi Medical Center" width={[105]}/>
            <Image src="/sponsor/silver/Alumni.png" alt="Siriraj Alumni" my={5} width={[110]}/>
          </Flex>
        </Flex>
        <Flex display={["none", null, null, "flex"]} direction={"row"} alignItems={"space-around"} justifyContent={"space-around"} height={200}>
          <Image src="/sponsor/silver/bertram.png" alt="Bertram" my={8} width={[200]} />
          <Image src="/sponsor/silver/BNH.png" alt="BNH Hospital" my={14} width={[79]}/>
          <Image src="/sponsor/silver/Thonburi.svg" alt="Thonburi Hospital" width={[170]}/>
          <Image src="/sponsor/silver/TMC.png" alt="Thonburi Medical Center" my={10} width={[105]}/>
          <Image src="/sponsor/silver/Alumni.png" alt="Siriraj Alumni" my={"50px"} width={[110]}/>
        </Flex>

      </SponsorBox>
      <SponsorBox>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Heading as={motion.h2} variants={{initial: {opacity: 0}, animate: {opacity: 1}}} size={'lg'} >
            Gold Tier
          </Heading>
        </Flex> 

        <Flex display={["flex", null, null, "none"]} direction={["column"]} alignItems={"space-around"} justifyContent={"space-around"} height={[700, 350]}>
          <Flex direction={["column", "row"]} alignItems={"center"} justifyContent={"space-around"}>
            <Image src="/sponsor/gold/MBK.png" alt="MBK" my={2} mb={["55px", 0]} mx={[0, 8]} width={[170]} />
            <Image src="/sponsor/gold/MY.png" alt="Meow Yak" mx={[0, 10]} width={[100]}/>
          </Flex>
          <Flex direction={["column", "row"]} alignItems={"center"} justifyContent={"space-around"}>
            <Image src="/sponsor/gold/AMSA_W.png" alt="AMSA" mb={["55px", 0]} mx={[0, 8]} width={[150]}/>
            <Image src="/sponsor/gold/SMST_W.png" alt="SMST" mx={[0, 3]} width={[150]}/>
          </Flex>
        </Flex>
        <Flex display={["none", null, null, "flex"]} direction={"row"} alignItems={"space-around"} justifyContent={"space-around"} height={200}>
          <Image src="/sponsor/gold/MBK.png" alt="MBK" my={"50px"} width={[170]} />
          <Image src="/sponsor/gold/MY.png" alt="Meow Yak" my={"35px"} width={[100]}/>
          <Image src="/sponsor/gold/AMSA_W.png" alt="AMSA" my={"20px"} width={[150]}/>
          <Image src="/sponsor/gold/SMST_W.png" alt="SMST" my={"20px"} width={[150]}/>
        </Flex>

      </SponsorBox>
      <SponsorBox>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Heading as={motion.h2} variants={{initial: {opacity: 0}, animate: {opacity: 1}}} size={'lg'} >
            Platinum Tier
          </Heading>
        </Flex> 
        <Flex direction={["column"]} alignItems={"center"} justifyContent={"space-around"} height={[200]}>
          <Image src="/sponsor/platinum/Preceptor.png" alt="Preceptor" width={[250, 350, null, 450]} />
        </Flex>
      </SponsorBox>

    </MotionBox>
  )
}

const About: NextPage = () => {
  return (
    <Layout> 
      <AboutSection/>
      <PresMesSection/>
      <HistorySection/>
      <Sponsor/>
    </Layout>
  )
}

export default About

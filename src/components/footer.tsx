import { Box, Center, Flex, Grid, Image, Text, Icon } from "@chakra-ui/react"
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

export const Footer = () => (
  <Box
    borderTop="2px dashed" 
    fontFamily="silkscreen"
    fontSize="7"
  >
    <Grid
      templateColumns='repeat(3, 1fr)'
      mt={2}
      justifyContent="space-between"
    >
      <Center flexDirection="column" > 
        <Text>
          COPYRIGHT 2023
        </Text>
        <Text>
          SIMPIC 2024
        </Text>
      </Center>
      <Center>
        <Image alt="logo" src="logo.png" w={10} />
      </Center>
      <Center flexDirection="column">
        <Text>
          contact@simpic2024.com
        </Text>
        <Box mt={2}>
          <Link href="https://www.facebook.com/SIMPICOfficial"> 
            <Icon mx={2} as={FaFacebookF} />
          </Link>
          <Link href="https://www.tiktok.com/@simpic_official">
            <Icon mx={2} as={FaTiktok} />
          </Link>
          <Link href="https://www.instagram.com/simpic_official/">
            <Icon mx={2} as={FaInstagram} />
          </Link>
          <Link href="/"> 
            <Icon mx={2} as={FaYoutube} /> 
          </Link>
        </Box>
      </Center>
    </Grid>
    <Center flexDir={"column"} my={3}>
      <Text>
        Faculty of Medicine Siriraj Hospital, Mahidol University
      </Text>
      <Text>
        2 Thanon Wang Lang, Siri Rat, Bangkok Noi, Bangkok
      </Text>
      <Box>
      </Box>
    </Center>
  </Box>
)

export default Footer

import { Box, Center, Flex, Text } from "@chakra-ui/react"

export const Footer = () => (
  <Box
    borderTop="2px dashed" 
    fontFamily="silkscreen"
    fontSize="7"
  >
    <Flex
      mt={2}
      mx={10}
      justifyContent="space-between"
    >
      <Box> 
        COPYRIGHT
      </Box>
      <Box>
        ""CONTACT INFO""
      </Box>
      <Box>
        simpic 2024
      </Box>
    </Flex>
    <Center flexDir={"column"} my={2}>
      <Text>
        Disclaimer here about the website and so on
      </Text>
      <Text>
        Probly write some more text here
      </Text>
      <Text>
        To be determined
      </Text>
    </Center>
  </Box>
)

export default Footer

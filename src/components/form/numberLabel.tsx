import { Box, Heading } from "@chakra-ui/react"
import { ReactNode } from "react";

type NumberLabelProps = {
  number?: number,
  children: ReactNode,
};
export const NumberLabel = ({children, number}:NumberLabelProps) => {
  if (!number) return (
    <Box mt={5}>
      {children}
    </Box>
  )
  return ( 
    <Box
      borderColor="gray.200 !important"
      border='1px'
      borderRadius={10}
      p={5}
      mt={5}
    >
      <Heading mb={3} size={'md'} color="brand.500">
         ข้อที่ {number}:
      </Heading>
      {children}
    </Box>
  )
}

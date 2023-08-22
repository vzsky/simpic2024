import { ReactNode, useRef } from 'react'
import { Box, Container, Flex, useToken } from "@chakra-ui/react"
import Navbar from './nav/navbar'
import { fromColor, toColor, useMeasure, zipWith } from '../helper/client'

type Props = {
  children: ReactNode
}

const Grid = ({children}: Props) => {
  const colors = ["blue.990", "orange.900"]
  const pixelSize = 10
  const ref = useRef<any>(null)
  const { width, height } = useMeasure(ref) 
  
  const rows = Math.floor(height / pixelSize) + 1
  const cols = Math.floor(width / pixelSize) + 1
  const num = 8

  const colorCodes = useToken("colors", colors)

  const blend = (r: number, c: number) => {
    let x = r - c
    let v = (x+cols)/(rows+cols)
    v = Math.floor(v * num + Math.random()) / num
    let result = zipWith<number>((a, b) => a+b)(
      fromColor(colorCodes[0]).map(h => h*v),
      fromColor(colorCodes[1]).map(h => h*(1-v))
    ).map(Math.floor) as any
    
    return toColor(result)
  }
  

  const pixels = []
  for (let r = 0; r < rows; r++) {
    let flex = []
    for (let c = 0; c < cols; c++) {
      flex.push(<Box w={`${pixelSize}px`} h={`${pixelSize}px`} bg={blend(r, c)} />)
    }
    pixels.push(<Flex>{flex}</Flex>)
  }
 
  return (
    <Box position="relative" minH="100vh">
      <Box
        position="absolute" 
        ref={ref} 
        h="100%" w="100%" 
        id="canvas" 
        overflow="hidden" 
        bgGradient='linear(to-tr, blue.990, orange.900)' 
      >
        {pixels}
      </Box>
      <Box>
        <Navbar />
        <Container maxW={'5xl'}  >
          {children}
        </Container>
      </Box>
    </Box>
  )
}

export default Grid

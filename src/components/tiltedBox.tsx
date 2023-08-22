import { Box, useBreakpointValue } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { MotionFlex } from './motionFactory'
import Link from 'next/link'
export type TiltedBoxProps = {
  children: ReactNode, 
  size: number[], 
  color?: string,
  style: object[],
  href?: string
}
const TiltedBox = ({children, size, color, style: styles, href}: TiltedBoxProps) => {
  
  const style = useBreakpointValue(styles)
  const innerSize = useBreakpointValue(size)
  if (!innerSize) return (<></>)
  if (!href) href="/"

  return (
    <Link href={href}>
      <MotionFlex 
        ml={50} 
        borderWidth={[3, 4]}
        borderColor={color}
        w={size} h={size}
        style={{rotate: "45deg", overflow:"hidden", ...style}}
        alignItems={"center"} justifyContent={"center"}
        _hover={{bg: 'green.800'}}

        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
      >
        <Box
          style={{rotate: "-45deg"}} 
        >
          {children}
        </Box>
      </MotionFlex>
    </Link>
  )
}

export default TiltedBox

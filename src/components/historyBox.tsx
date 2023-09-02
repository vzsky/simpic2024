import { Box, Flex } from "@chakra-ui/react"
import { MotionBox, MotionFlex } from "./motionFactory"
import { ReactNode, useState, useRef, useEffect } from "react"
import { useAnimation, useInView } from "framer-motion"

type HistoryBoxType = {
  year: number
  name: string
  children?: ReactNode
  defaultOpen?: boolean
}
export const HistoryBox = ({year, name, children, defaultOpen}: HistoryBoxType) => {
  const [display, setDisplay] = useState(defaultOpen ? true : false)
  const ref = useRef(null)
  const inView = useInView(ref, {once: true})
  const control = useAnimation()

  useEffect(() => {
    if (inView) {
     control.start('visible') 
    }
  })

  const toggleDisplay = () => { setDisplay(!display) }
  return (
    <Flex w={['100%', '60%']}>
      <MotionBox layout="position" pt={5} w={"20%"}>
        YEAR {year}
      </MotionBox>
      <MotionBox
        m={2}
        p={3}
        w={"80%"}
        cursor={children ? 'pointer' : 'auto'}
        onClick={children ? toggleDisplay : () => {}}
        bgGradient={"linear(to-r, orange.700, yellow.800)"}
        style={{borderRadius: "10px"}}
        layout
        layoutId={name}
        ref={ref}

        variants={{ 
          visible: { y: 0, opacity: 1, transition: { duration: 0.3 }},
          hidden: { y: 50, opacity: 0}
        }}

        initial="hidden"
        animate={control}
      >
        <MotionFlex layout="position" direction={['column', 'row']} justifyContent={'space-between'}> 
          <Box>
            {name}
          </Box>
        </MotionFlex>
      { display && 
        <MotionBox   
          mt={3} 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1}}
          // @ts-ignore
          transition={{ delay: 0.2 }}
        >
          {children}
        </MotionBox>
        }
      </MotionBox>
    </Flex>
  )
}

export default HistoryBox

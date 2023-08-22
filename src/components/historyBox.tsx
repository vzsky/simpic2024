import { Box } from "@chakra-ui/react"
import { MotionBox, MotionFlex } from "./motionFactory"
import { ReactNode, useState, useRef, useEffect } from "react"
import { useAnimation, useInView } from "framer-motion"

type HistoryBoxType = {
  year: number
  name: string
  children: ReactNode
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
    <MotionBox
      m={2}
      p={3}
      w={['100%', '60%']}
      cursor={'pointer'}
      onClick={toggleDisplay}
      bgGradient={"linear(to-r, orange.700, yellow.800)"}
      style={{borderRadius: "10px"}}
      layout
      layoutId={name}
      ref={ref}

      variants={{ 
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 }},
        hidden: { y: 100, opacity: 0}
      }}

      initial="hidden"
      animate={control}
    >
      <MotionFlex layout="position" direction={['column', 'row']} justify={'space-between'}>
        <Box>
          YEAR {year}
        </Box>
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
  )
}

export default HistoryBox

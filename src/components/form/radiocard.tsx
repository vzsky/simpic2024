import { Box, Text, Flex, Radio, useRadio, UseRadioProps, Center } from "@chakra-ui/react"

export interface RadioCardProps extends UseRadioProps {
  children: JSX.Element
  direction?: "column" | "row" | ("row"|"column")[]
}

export const RadioCard = (props:RadioCardProps) => {
  let flip = (s: "column" | "row"): "column" | "row" => (s === "column"? "row" : "column") 
  let direction = typeof props.direction === 'string' ? flip(props.direction) :
    props.direction === undefined ? undefined : props.direction.map(flip)
  return (
    <Center flexDirection={direction}>
      <Radio colorScheme="brand" {...props}> </Radio>
      <Text> {props.children}  </Text>
    </Center>
  )
}
// export const RadioCard = (props:RadioCardProps) => {
//   const { getInputProps, getCheckboxProps } = useRadio(props)
//
//   let input = getInputProps()
//   let checkbox = getCheckboxProps()
//
//   input.style={
//     border: '0px',
//     height: '1px',
//     width: '1px',
//     margin: '-1px',
//     padding: '0px',
//     overflow: 'hidden',
//     whiteSpace: 'nowrap',
//     // position: 'absolute', // position: absolute ruined something, i don't know
//     clip: 'rect(0px, 0px, 0px, 0px)',
//     visibility: 'hidden' // just to be surely invisible
//   }
//
//   return (
//     <Flex as='label'>
//       <input {...input} />
//       <Flex
//         {...checkbox}
//         cursor='pointer'
//         borderWidth='1px'
//         borderRadius='10px'
//         boxShadow='md'
//         padding={2}
//         _checked={{
//           bg: 'brand.300',
//           color: 'white',
//           borderColor: 'brand.300',
//         }}
//         _focus={{
//           boxShadow: 'outline',
//         }}
//       > 
//         {props.children}
//       </Flex>
//     </Flex>
//   )
// }

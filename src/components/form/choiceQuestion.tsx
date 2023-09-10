import { Box, FormLabel, Text, useRadioGroup, Flex, Center } from "@chakra-ui/react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { SubmitFunction } from "./genericForm";
import { RadioCard } from './radiocard'
import { Choices, ImageProps } from "../../helper/type";
import Image from "next/image";
import { NumberLabel } from "./numberLabel";

export interface GenericChoiceQuestion {
  label: string
  img?: ImageProps
  choices: Choices
  direction?: 'row'|'column'|('row'|'column')[]
  wrap?: 'wrap'|'nowrap'|('wrap'|'nowrap')[]
  justify?: 'space-between'|'space-around'|('space-between'|'space-around')[]
  number?: number
  required?: boolean
  disabled?: boolean
  onChange?: (_: any) => void
}
interface ChoiceQuestionProps<Tname extends string> extends GenericChoiceQuestion {
  field: ControllerRenderProps<FieldValues, Tname>
  submit?: SubmitFunction
}
export const ChoiceQuestion = <Tname extends string>({
  disabled, field, label, choices, submit, direction, wrap, justify, number, img, required, onChange
}: ChoiceQuestionProps<Tname>) => {

  const { getRootProps, getRadioProps } = useRadioGroup({
    ...field, onChange: onChange
  })

  const group = getRootProps()
  return (
    <Box mt={2}>
      <NumberLabel number={number}>
        <FormLabel style={{whiteSpace: 'pre-wrap'}}>
          {(required?'* ':'')}{label}
        </FormLabel>
        { img && 
          <Center>
            <Box my={3} w={img.width} h={img.height}>
              <Flex position="relative" width="100%" height="100%">
                <Image
                  src={img.src}
                  alt={img.alt}
                  layout="fill"
                  objectFit="contain"
                />
              </Flex>
            </Box>
          </Center>
        }
        <Flex 
          direction={direction} 
          flexWrap={wrap}
          justify={justify?justify:'space-between'}
          {...group} 
        >
          {choices.map((choice)=>{
            const radio = getRadioProps({ value:choice.value })
            return (
              <Box mt={1} key={choice.value}>
                <RadioCard {...radio} isDisabled={disabled} direction={direction}> 
                  <Box>
                    {
                      choice.image && 
                      <Box my={3} w={choice.image.width} h={choice.image.height}>
                        <Flex position="relative" width="100%" height="100%">
                          <Image
                            src={choice.image.src}
                            alt={choice.image.alt}
                            layout="fill"
                            objectFit="contain"
                          />
                        </Flex>
                      </Box>
                    }
                    <Text>
                      {choice.label} 
                    </Text>
                  </Box>
                </RadioCard>
              </Box>
            )
          })}
        </Flex>
      </NumberLabel>
    </Box>
  )
}

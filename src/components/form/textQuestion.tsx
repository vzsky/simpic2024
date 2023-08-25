import { FormControl, FormErrorMessage, FormLabel, Input, Center, Flex, Box } from "@chakra-ui/react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { submitOnChange } from "../../helper/client";
import { SubmitFunction } from "./genericForm";
import Image from "next/image";
import { NumberLabel } from "./numberLabel";
import { ImageProps } from "../../helper/type";

export interface GenericTextQuestion {
  label: string
  img?: ImageProps
  width?: number|string|(number|string)[]
  height?: number|string|(number|string)[]
  as?: 'textarea'|'input'|'basic'
  number?: number
  placeholder?: string
  required?: boolean
  disabled?: boolean
  onChange?: (_: any) => void 
}

interface TextQuestionProps<Tname extends string> extends GenericTextQuestion {
  errors: { [error: string]: any }
  field: ControllerRenderProps<FieldValues, Tname>
  submit?: SubmitFunction
}
export const TextQuestion = <Tname extends string>({
  disabled, errors, field, label, submit, width, height, as, img, number, placeholder, required, onChange
}: TextQuestionProps<Tname>) => {

  if (as == 'basic') return (
    <Box>
      <FormControl isInvalid={errors[field.name]?true:false}>
        <Box
          mt={3}
        >
          <FormLabel>
            {label} :
          </FormLabel>
        </Box>
        
        <Input 
          placeholder={(required?'* ':'')+(placeholder?placeholder:label)} 
          height={height} 
          width={width} 
          {...field} 
          onChange={onChange} 
          isDisabled={disabled}
        />
        <FormErrorMessage>{errors[field.name]?.message}</FormErrorMessage>
      </FormControl>
    </Box>
  )
  return (
    <NumberLabel number={number}>
      <FormControl isInvalid={errors[field.name]?true:false}>
        <FormLabel style={{whiteSpace: 'pre-wrap'}}>{(required?'* ':'')}{label} :</FormLabel>
        {img && (
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
        )}
        <Input 
          placeholder={placeholder?placeholder:label} 
          as={as} 
          height={height} 
          width={width} 
          style={{
            'WebkitBoxSizing': 'border-box',
            'MozBoxSizing': 'border-box',
            'boxSizing': 'border-box'
          }} 
          isDisabled={disabled}
          {...field}
          onChange={onChange} 
        />
        <FormErrorMessage>{errors[field.name]?.message}</FormErrorMessage>
      </FormControl>
    </NumberLabel>
  )
}

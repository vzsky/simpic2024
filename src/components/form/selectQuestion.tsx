import { Box, FormControl, FormErrorMessage, FormLabel, Select } from "@chakra-ui/react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { submitOnChange } from "../../helper/client";
import { SubmitFunction } from "./genericForm";

export interface GenericSelectQuestion {
  label: string
  choices: {label: string, value:any}[]
  width?: number|string|(number|string)[]
  number?: number
  required?: boolean
  disabled?: boolean
  onChange?: (_: any) => void
}

interface SelectQuestionProps<Tname extends string> extends GenericSelectQuestion {
  field: ControllerRenderProps<FieldValues, Tname>
  submit?: SubmitFunction
  errors: {[error: string]: any}
}
export const SelectQuestion = <Tname extends string>({
  disabled, field, label, choices, submit, width, number, errors, required, onChange
}: SelectQuestionProps<Tname>) => {
  return (
    <Box w={"100%"}>
      <FormControl isInvalid={errors[field.name]?.message}>
        <FormLabel mt={2}> {label} : </FormLabel>
        <Select 
          {...field} 
          isDisabled={disabled} 
          onChange={onChange}
          w={width}
          placeholder={(required?'* ':'') + (label || "Select...")}
        >
          {choices.map((choice, ind) => (
            <option key={ind} value={choice.value}>{choice.label}</option>
          ))}
        </Select>
        <FormErrorMessage>{errors[field.name]?.message}</FormErrorMessage>
      </FormControl>
    </Box>
  )
}

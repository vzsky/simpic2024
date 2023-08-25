import { ControllerFieldState, ControllerRenderProps, FieldValues, UseFormStateReturn } from "react-hook-form"
import { GenericChoiceQuestion } from "./choiceQuestion"
import { SubmitFunction } from "./genericForm"
import { GenericSelectQuestion } from "./selectQuestion"
import { GenericTextQuestion } from "./textQuestion"
import { ResponsiveValue } from "@chakra-ui/react"

export interface ChoiceQuestion extends GenericChoiceQuestion {
  type: 'choice'
  name: string
}

export interface TextQuestion extends GenericTextQuestion {
  type: 'text'
  name: string
}

export interface SelectQuestion extends GenericSelectQuestion {
  type: 'select', 
  name: string
}

export interface CustomQuestion {
  type: 'custom', 
  name: string,
  render: (props:{
    field: ControllerRenderProps<FieldValues, string>
    fieldState?: ControllerFieldState
    formState?: UseFormStateReturn<FieldValues>
    submit?: SubmitFunction
    onChange?: (_: any) => void
    disabled?: boolean
  }) => JSX.Element,
}

export interface GroupedQuestions {
  type: 'group',
  groupedDirection: ResponsiveValue<'row'|'column'|'initial'|'inherit'>,
  questions: Questions,
  display: ResponsiveValue<'none'|'flex'>
}
export type Question = (ChoiceQuestion | TextQuestion | SelectQuestion | CustomQuestion) & {
  required?: boolean
}
export type Questions = (Question|GroupedQuestions)[]

import { Flex, ResponsiveValue } from "@chakra-ui/react"
import { Control, Controller, ControllerRenderProps, FieldValues } from "react-hook-form"
import { SubmitFunction } from "./genericForm"
import { ChoiceQuestion } from "./choiceQuestion"
import { SelectQuestion } from "./selectQuestion"
import { TextQuestion } from "./textQuestion"
import { Question, Questions } from "./questionType"
import { submitOnChange } from "../../helper/client"


interface RenderQuestionProps {
  question: Question, 
  field: ControllerRenderProps<FieldValues, string>
  submit: SubmitFunction,
  errors: {[error: string]: any},
  disabled: boolean,
  onChange: (_: any) => void
}
export const RenderQuestion = ({question, field, submit, errors, disabled, onChange}:RenderQuestionProps):JSX.Element => (
  <Flex p={2} w={"100%"}>
    {(question.type == 'choice') && (
      <ChoiceQuestion 
        submit={submit} 
        field={field}
        onChange={onChange}
        label={question.label} 
        choices={question.choices} 
        direction={question.direction}
        wrap={question.wrap}
        justify={question.justify}
        img={question.img}
        number={question.number}
        required={question.required}
        disabled={disabled}
      />
    )}
    {(question.type == 'text') && (
      <TextQuestion 
        submit={submit}
        field={field} 
        onChange={onChange}
        label={question.label} 
        errors={errors} 
        width={question.width}
        height={question.height}
        as={question.as}
        img={question.img}
        number={question.number}
        placeholder={question.placeholder}
        required={question.required}
        disabled={disabled}
      />
    )}{(question.type == 'select') && (
      <SelectQuestion
        field={field} 
        onChange={onChange}
        choices={question.choices}
        label={question.label}
        width={question.width}
        number={question.number}
        submit={submit}
        errors={errors}
        required={question.required}
        disabled={disabled}
      />
    )}
    {(question.type == 'custom') && (
      <question.render 
        field={field} 
        submit={submit}
        disabled={disabled}
        onChange={onChange}
      />
    )}
  </Flex>
)

interface RenderGroupedQuestionsProps {
  questions: Questions, 
  control: Control<FieldValues, Object>
  submit: SubmitFunction,
  errors: {[error: string]: any}
  groupedDirection: ResponsiveValue<'row' | 'column' | 'initial' | 'inherit'>
  display: ResponsiveValue<'none'|'flex'>
  disabled: boolean
  shouldSubmitOnChange: boolean
}
export const RenderGroupedQuestion = (
  {questions, submit, errors, control, groupedDirection, display, disabled, shouldSubmitOnChange}:RenderGroupedQuestionsProps
):JSX.Element => {
  return (
      <Flex position="relative" direction={groupedDirection} display={display} justifyContent={'space-between'} w="100%">
        {questions.map((question, ind) => {
          if (question.type == 'group') return (
            <RenderGroupedQuestion
              key={ind}
              questions={question.questions}
              submit={submit}
              errors={errors}
              control={control}
              groupedDirection={question.groupedDirection}
              display={question.display}
              disabled={disabled}
              shouldSubmitOnChange={shouldSubmitOnChange}
            />
          )
          if (question.type == 'decoration') return (
            <question.render />
          )
          else return (
            <Controller
              key={ind}
              render={({ field }) => (
                <RenderQuestion 
                  disabled={disabled}
                  question={question} 
                  onChange={shouldSubmitOnChange ? submitOnChange(field.onChange, submit) : field.onChange}
                  field={field}
                  submit={submit}
                  errors={errors}
                />
              )}
              name={question.name}
              control={control}
            />
          )
        })}
      </Flex>
  )
}

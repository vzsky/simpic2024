import GenericForm, { FormProps } from "./genericForm";
import { RenderGroupedQuestion } from './renderQuestion'
import { Questions } from "./questionType";
import { Button, Center } from "@chakra-ui/react";

const getInitialDefaultValues = (questions:Questions): {[x:string]:any} => (
  questions
    .map((question) => {
      if (question.type == 'group') {
        return getInitialDefaultValues(question.questions)
      }
      else return ({[question.name]:''})
    })
    .reduce((acc, now) => ({...acc, ...now}))
)
export interface MasterFormProps {
  questions: Questions, 
  url: string, 
  linkBack?: string,
  disabled?: boolean,
  preSubmit?: (data:object) => Promise<object>,
  shouldSubmitOnChange?: boolean
}
export const Form = ({questions, url, preSubmit, disabled, shouldSubmitOnChange = true}:MasterFormProps) => {
  const defaultValues = getInitialDefaultValues(questions)

  return GenericForm({
    preSubmit,
    url, 
    renderForm:({control, errors, submit, lastSubmit}:FormProps) => {
      return (
        <>
          <RenderGroupedQuestion
            disabled={disabled || false}
            display="flex"
            questions={questions} 
            submit={submit}
            control={control}
            errors={errors}
            groupedDirection={"column"}
            shouldSubmitOnChange={shouldSubmitOnChange}
          />
          {!shouldSubmitOnChange &&
            <Center mt={5} w="100%">
              <Button onClick={submit}> submit </Button>
            </Center>
          }
        </>
      )
    }, 
    defaultValues
  })
}

export default Form

import {Control, FieldValues, useForm, UseFormRegister} from "react-hook-form"
import {BaseSyntheticEvent, useEffect, useState} from "react"
import useSWR from 'swr'
import { fetcher } from "../../helper/client"
import Error from "../error"

const saveFormData = async (url:string, data: object) => {
  return await fetch(url, {
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"},
      method: "POST"
  })
}

export type SubmitFunction = (e?:BaseSyntheticEvent|undefined) => Promise<void> 

// All values that come from useForm, to be used in our custom forms
export type FormProps = { 
  register: UseFormRegister<FieldValues>
  control: Control<FieldValues, Object>
  lastSubmit: number|null
  errors: { [error: string]: any }
  submit: SubmitFunction
}

type Props = {
  url: string
  renderForm: (formProps: FormProps) => React.ReactNode
  defaultValues: Record<string, any>
  preSubmit?: (raw: object) => Promise<object>
}
const GenericForm = ({url, renderForm, defaultValues, preSubmit}: Props) => {
  // Fetch our initial form data
  const [lastSubmit, setLastSubmit] = useState(null)
  const {data, error} = useSWR(url, fetcher)
  const {
    register, 
    control, 
    reset, 
    handleSubmit, 
    setError, 
    formState: {isSubmitting, errors, isDirty, isValid}
  } = useForm({
    defaultValues
  });

  // Submit handler which displays errors + success messages to the user
  const onSubmit = async (raw_data: object) => {
    // console.log('submitting the form...')
    const noPreprocess = (x:object):Promise<object> => (new Promise(res=>res(x)))
    const getData = (preSubmit === undefined ? noPreprocess : preSubmit)
    const data = await getData(raw_data)
    const response = await saveFormData(url, data)

    if (response.status === 400) {
      // console.log('save form response - 400')
      // Validation error, expect response to be a JSON response {"field": "error message for that field"}
      const fieldToErrorMessage: { [fieldName: string]: string } = await response.json()
      for (const [fieldName, errorMessage] of Object.entries(fieldToErrorMessage)) {
        setError(fieldName, {type: 'custom', message: errorMessage})
        console.log('fielderror - ', fieldName, errorMessage)
      }
      return
    }
    if (response.ok) {
      // successful
      console.log('save form response - ok')
      const data = await response.json()
      reset(data) // they used to be nothing here but I changed this. Let's see if any error occur for auto saving forms
      setLastSubmit(data['lastSubmit'])
      return
    }
    setError("Unknown", {type: 'custom', message: "Unexpected Internal Error"})
    return
  }

  const submit = handleSubmit(onSubmit)

   // Sets the default value of the form once it's available
  useEffect(() => {
    if (data === undefined) return; // loading
    console.log('set default')
    setLastSubmit(data['lastSubmit'])
    reset(data);
  }, [reset, data]);

  // Handle errors + loading state
  if (error) return <Error />

  // render the form
  return <form>
    {renderForm({register, control, errors, lastSubmit, submit})}
  </form>;
}

export default GenericForm

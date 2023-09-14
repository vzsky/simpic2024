import { FormControl, FormErrorMessage, FormLabel, Input, Text } from "@chakra-ui/react"
import moment from "moment"
import { ChangeEvent, useRef, useState } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"
import { maxUploadFileSize, textMaxUploadFileSize } from "../../settings"
import { SubmitFunction } from "./genericForm"
import { NumberLabel } from "./numberLabel"

export interface GenericFileQuestion {
  label: string
  placeholder?: string
  fileTypes: string
  number?: number
  required?: boolean
  disabled?: boolean
  onChange?: (_: any) => void 
}
interface FileQuestionProps<Tname extends string> extends GenericFileQuestion {
  errors: { [error: string]: any }
  field: ControllerRenderProps<FieldValues, Tname>
  submit?: SubmitFunction
}

export const FileQuestion = <Tname extends string>({
  disabled, errors, field, label, submit, fileTypes, placeholder, number, required, onChange
}: FileQuestionProps<Tname>) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const savedFile = field.value

  const [error, setError] = useState(errors[field.name])

  const onFileChange = (event:ChangeEvent<HTMLInputElement>) => {
    setError(null)
    let files = event.target.files
    if (files == null) return
    let file = files[0]
    if (file.size > maxUploadFileSize) {
      setError({message: `Uploaded file cannot exceed ${textMaxUploadFileSize}`})
      return
    } 
    if (onChange) onChange(file)
  }

  console.log("savefiled is ", savedFile)

  return (
    <NumberLabel number={number}>
      <FormControl mt={5} isInvalid={error?true:false}>
        <FormLabel fontSize={['sm', 'lg']}>{(required?'* ':'')}{label}</FormLabel>
        <input type='file'
          onChange={onFileChange}
          accept={fileTypes}
          ref={inputRef}
          style={{display: 'none'}} 
        />
        <Input
          placeholder={placeholder || "Browse File"}
          onClick={disabled?(()=>{}):(() => inputRef.current.click())}
          isDisabled={disabled}
          readOnly={true}
          value={''}
        />
        {(!savedFile || (savedFile == "") || !savedFile.time || (savedFile.time == 0)) && 
          <Text mt={2} fontSize={['sm', 'md']}> No file has been uploaded </Text>
        }
        { !(!savedFile || (savedFile == "") || !savedFile.time || (savedFile.time == 0)) && 
          <Text mt={2} fontSize={['sm', 'md']}> {savedFile.name} was uploaded {moment(savedFile.time).fromNow()} </Text>
        }
        <FormErrorMessage>{error?.message}</FormErrorMessage>
      </FormControl>
    </NumberLabel>
  )
}

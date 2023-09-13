import { Questions } from "../../components/form/questionType"
import { Box, Checkbox, Flex, Heading, Text } from "@chakra-ui/react";
import { StylesConfig } from "react-select";
import Creatable from 'react-select/creatable';
import { requiredFields } from "./userinfo.api";
import { maxUploadFileSize } from "../../settings";
import { toBase64 } from "../client";

let options  = [
  { value: 'None', label: 'None'},
  { value: 'NoPork', label: 'No Pork' }, 
  { value: 'NoBeef', label: 'No Beef' },
  { value: 'NoSeafood', label: 'No Seafood' }, 
  { value: 'Halal', label: 'Halal' }
]

const colourStyles: StylesConfig<string> = {
  control: (styles) => ({
    ...styles, 
    backgroundColor: 'transparent',
    color: 'white'
  }),
  option: (styles, { isSelected }) => {
    return {
      ...styles,
      color: 'var(--chakra-colors-dark-700)',
      backgroundColor: isSelected ? 'var(--chakra-colors-orange-200)' : 'white', 
    };
  },
  input: (styles) => ({ ...styles, color: 'white' }),
  placeholder: (styles) => ({ ...styles, color: 'white' }),
  singleValue: (styles) => ({ ...styles, color: 'white' }),
};

const r = (field: string) => (requiredFields.includes(field as any))

export const questions: Questions = [
  { type: 'decoration', Render: () => (<Text mt={5} size={['sm']}> Fields marked * is required </Text>)},
  { type: 'decoration', Render: () => (<Heading mt={5} size={['md']}> Part 1: Personal Information </Heading>)},
  { type: 'group', display: 'flex', groupedDirection: ['column', 'column', 'column', 'row'], questions: [
    { type: 'group', width: ['100%', null, null, '300%'], display: 'flex', groupedDirection: ['column', 'column', 'row'], questions: [
      { type: 'text', name: 'fname', label: 'First name', placeholder: "John", width: ["100%"], required: r('fname') },
      { type: 'text', name: 'lname', label: 'Last name', placeholder: "Smith", width: ["100%"], required: r('lname') },
    ]},
    { type: 'text', name: 'nname', label: 'Nickname', width: ["100%"], required: r('nname')},
  ]}, 
  { type: 'file', name: 'picture', label: 'Profile Picture', fileTypes: 'image/*', required: r('picture') },
  { type: 'group', display: 'flex', groupedDirection: ['column', 'column', 'row'], questions: [
    { type: 'group', width: ["100%", "100%", "200%"], display: 'flex', groupedDirection: ['column', 'row'], questions: [
      { type: 'text', name: 'nationality', label: 'Nationality', width: ["100%"], required: r('nationality')},
      { type: 'text', name: 'natId', label: 'Thai ID / Passport ID', width: ["100%"], required: r('natId')},
    ]},
    { type: 'text', name: 'birthday', label: "Birthday", placeholder: "28/04/2003", width: ["100%"], required: r('birthday')},
  ]},
  { type: 'group', display: 'flex', groupedDirection: ['column', 'column', 'row'], questions: [
    { type: 'group', width: ['100%', '100%', '200%'], display: 'flex', groupedDirection: ['column', 'row'], questions: [
      { type: 'select', name: 'sex', label: "Sex", width: ["100%"], required: r('sex'), 
        choices: [{ label: "Male", value: "M" }, { label: "Female", value: "F" }]},
      { type: 'text', name: 'gender', label: "Gender", width: ["100%"], required: r('gender') },
    ]},
    { type: 'select', name: 'shirtSize', label: "SIMPIC T-Shirt Size", width: ["100%"], required: r('shirtSize'),
      choices: [
        { value: "SSS", label: "SSS (Length: 24, Width: 34)" }, 
        { value: "SS", label: "SS (Length: 25, Width: 36)" }, 
        { value: "S", label: "S (Length: 26, Width: 38)" }, 
        { value: "M", label: "M (Length: 27, Width: 40)" }, 
        { value: "L", label: "L (Length: 28, Width: 42)" }, 
        { value: "XL", label: "XL (Length: 29, Width: 44)" }, 
        { value: "2XL", label: "2XL (Length: 30, Width: 46)" }, 
        { value: "3XL", label: "3XL (Length: 31, Width: 48)" }, 
        { value: "4XL", label: "4XL (Length: 32, Width: 50)" }, 
        { value: "5XL", label: "5XL (Length: 33, Width: 52)" }, 
        { value: "6XL", label: "6XL (Length: 34, Width: 54)" }, 
        { value: "7XL", label: "7XL (Length: 35, Width: 56)" }, 
        { value: "8XL", label: "8XL (Length: 36, Width: 58)" }, 
      ]
    },
  ]},
  { type: 'text', name: 'religion', label: 'religion', width: ["100%"], required: r('religion')},
  { type: 'text', name: 'relCeremony', label: 'religious ceremony (e.g. Islamic Prayer Times. Please write clearly)', width: ["100%"],
    required: r('relCeremony')
  },
  { type: 'text', name: 'other', label: 'other', width: ["100%"], required: r('other')},
  { type: 'decoration', Render: () => (<Heading mt={5} size={['md']}> Part 2: Contact </Heading>)},
  { type: 'text', name: 'email', label: 'email', width: ["100%"], required: r('email')},

  { type: 'group', display: ['flex', 'flex', 'none'], groupedDirection: ['column'], questions: [
    { type: 'group', display: 'flex', groupedDirection: ['column', 'row'], questions: [
      { type: 'text', name: 'phone', label: 'phone', width: ["100%"], required: r('phone')},
      { type: 'text', name: 'telegram', label: 'telegram', width: ["100%"], required: r('telegram')},
    ]},
    { type: 'group', display: 'flex', groupedDirection: ['column', 'row'], questions: [
      { type: 'text', name: 'line', label: 'line', width: ["100%"], required: r('line')},
      { type: 'text', name: 'whatapps', label: 'whatapps', width: ["100%"], required: r('whatapps')},
    ]},
    { type: 'group', display: 'flex', groupedDirection: ['column', 'row'], questions: [
      { type: 'text', name: 'instagram', label: 'instagram', width: ["100%"], required: r('instagram')},
      { type: 'text', name: 'facebook', label: 'facebook', width: ["100%"], required: r('facebook')},
    ]},
  ]},
  { type: 'group', display: ['none', 'none', 'flex'], groupedDirection: ['column'], questions: [
    { type: 'group', display: 'flex', groupedDirection: ['column', 'row'], questions: [
      { type: 'text', name: 'phone', label: 'phone', width: ["100%"], required: r('phone')},
      { type: 'text', name: 'telegram', label: 'telegram', width: ["100%"], required: r('telegram')},
      { type: 'text', name: 'line', label: 'line', width: ["100%"], required: r('line')},
    ]},
    { type: 'group', display: 'flex', groupedDirection: ['column', 'row'], questions: [
      { type: 'text', name: 'whatapps', label: 'whatapps', width: ["100%"], required: r('whatapps')},
      { type: 'text', name: 'instagram', label: 'instagram', width: ["100%"], required: r('instagram')},
      { type: 'text', name: 'facebook', label: 'facebook', width: ["100%"], required: r('facebook')},
    ]},
  ]},

  { type: 'group', display: 'flex', groupedDirection: ['column', 'column', 'row'], questions: [
    { type: 'text', name: 'emergencyName', label: 'Contact for Emergency', required: r('emergencyName')},
    { type: 'text', name: 'emergencyPhone', label: 'Phone Number for Emergency', required: r('emergencyPhone')},
  ]},
  { type: 'decoration', Render: () => (<Heading mt={5} size={['md']}> Part 3: Medical Information </Heading>)},
  { type: 'text', name: 'medCond', label: 'medical condition', width: ["100%"], required: r('medCond')}, 
  { type: 'text', name: 'medRequire', label: 'medication and medical requirements', width: ["100%"], required: r('medRequire')}, 
  { type: 'text', name: 'allergy', label: 'allergy', width: ["100%"], required: r('allergy')},
  
  { type: 'choice', name: 'vegan', label: 'vegan or vegetarian', choices: [{ label: "Yes", value: 'T' },{ label: "No", value: 'F' }],
    required: r('vegan')},
  { type: 'custom', name: 'dietary', Render: ({ field, onChange, disabled }) => {
    // it is required thus *
    let defaultValue = options.filter((opt)=>(opt.value == field.value))[0]?.label || field.value
    return (
      <Box mt={5} w={"100%"}>
        <Text mb={2}> * dietary limitation: </Text>
        <Creatable 
          isDisabled={disabled}
          name={field.name}
          placeholder={defaultValue || "select or type"}
          isClearable options={options as any} 
          styles={colourStyles} 
          onChange={(event: any) => onChange(event ? event.value : null) } 
        />
      </Box>
    )
  }},  
  { type: 'choice', name: 'seasick', label: 'experienced seasick', required: r('seasick'),
    choices: [{ label: "Yes", value: 'T' },{ label: "No", value: 'F' }]},
  { type: 'choice', name: 'carsick', label: 'experienced carsick', required: r('carsick'), 
    choices: [{ label: "Yes", value: 'T' },{ label: "No", value: 'F' }]},
 
  { type: 'decoration', Render: () => (<Heading mt={5} size={['md']}> Part 4: Agreements </Heading>) },
  { type: 'custom', name: "rAndR", Render: ({ field, onChange, disabled }) => (
    <Flex w={"100%"}>
      <Text> * I agree to the rules and regulations </Text>
      <Checkbox
        disabled={disabled}
        mt={1}
        mr={2}
        ml={10}
        name={field.name}
        colorScheme="orange"
        isChecked={field.value}
        onChange={onChange}
      />
    </Flex>
  )},
  { type: 'custom', name: "tAndC", Render: ({ field, onChange, disabled }) => (
    <Flex w={"100%"}>
      {field.value}
      <Text> * I agree to the terms and conditions </Text>
      <Checkbox
        disabled={disabled}
        mt={1}
        mr={2}
        ml={10}
        name={field.name}
        colorScheme="orange"
        isChecked={field.value}
        onChange={onChange}
      />
    </Flex>
  )}
]

export const preSubmit = async (data:any):Promise<object> => {
  const picture = data.picture
  let encoded;
  if (picture) {
    if (picture.size < maxUploadFileSize) {
      encoded = await toBase64(picture)
    }
  }
  return {
    ...data, 
    picture: { 
      encoding: encoded,
      name: picture?.name
    },
  }
}

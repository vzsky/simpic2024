import { Questions } from "../../components/form/questionType"
import { Checkbox, Flex, Heading, Text } from "@chakra-ui/react";

export const questions: Questions = [
  { type: 'decoration', Render: () => (<Heading mt={5} size={['md']}> Part 1: Personal Information </Heading>)},
  { type: 'group', display: 'flex', groupedDirection: ['column', 'column', 'row'], questions: [
    { type: 'text', name: 'fname', label: 'First name', placeholder: "John", width: ["100%"] },
    { type: 'text', name: 'lname', label: 'Last name', placeholder: "Smith", width: ["100%"]},
  ]},
  { type: 'text', name: 'nname', label: 'Nickname', width: ["100%"]},
  { type: 'group', display: 'flex', groupedDirection: ['column', 'row'], questions: [
    { type: 'text', name: 'nationality', label: 'Nationality', width: ["100%"]},
    { type: 'text', name: 'natId', label: 'Thai ID / Passport ID', width: ["100%"]},
  ]},
  { type: 'text', name: 'birthday', label: "Birthday", placeholder: "28/04/2003" },
  { type: 'select', name: 'sex', label: "Sex", choices: [{ label: "Male", value: "M" }, { label: "Female", value: "F" }]},
  { type: 'text', name: 'gender', label: "Gender" },
  { type: 'select', name: 'shirtSize', label: "SIMPIC T-Shirt Size", choices: [
    { value: "S", label: "S" }, 
    { value: "M", label: "M" }, 
    { value: "L", label: "L" }, 
    { value: "XL", label: "XL" }, 
    { value: "2XL", label: "2XL" } 
  ]},
  { type: 'decoration', Render: () => (<Heading mt={5} size={['md']}> Part 2: Contact </Heading>)},
  { type: 'text', name: 'email', label: 'email', width: ["100%"]},
  { type: 'text', name: 'phone', label: 'phone', width: ["100%"]},
  { type: 'text', name: 'telegram', label: 'telegram', width: ["100%"]},
  { type: 'text', name: 'line', label: 'line', width: ["100%"]},
  { type: 'text', name: 'whatapps', label: 'whatapps', width: ["100%"]},
  { type: 'text', name: 'instagram', label: 'instagram', width: ["100%"]},
  { type: 'text', name: 'facebook', label: 'facebook', width: ["100%"]},

  { type: 'text', name: 'emergencyName', label: 'Contact for Emergency', width: ["100%"]},
  { type: 'text', name: 'emergencyPhone', label: 'Phone Number for Emergency', width: ["100%"]},
  { type: 'decoration', Render: () => (<Heading mt={5} size={['md']}> Part 3: Medical Information </Heading>)},
  { type: 'text', name: 'medCond', label: 'medical condition', width: ["100%"]}, 
  { type: 'text', name: 'medRequire', label: 'medication and medical requirements', width: ["100%"]}, 
  { type: 'text', name: 'allergy', label: 'allergy', width: ["100%"]},
  
  { type: 'choice', name: 'vegan', label: 'vegan or vegetarian', choices: [{ label: "Yes", value: 'T' },{ label: "No", value: 'F' }]},
  { type: 'text', name: 'dietary', label: 'dietary requirements' }, // make this custom
  { type: 'choice', name: 'seasick', label: 'experienced seasick', 
    choices: [{ label: "Yes", value: 'T' },{ label: "No", value: 'F' }]},
  { type: 'choice', name: 'carsick', label: 'experienced carsick', 
    choices: [{ label: "Yes", value: 'T' },{ label: "No", value: 'F' }]},
  
  { type: 'custom', name: "rAndR", Render: ({ field, onChange }) => (
    <Flex>
      <Text> I agree to the rules and regulations </Text>
      <Checkbox
        mt={1}
        mr={2}
        name={field.name}
        isChecked={field.value}
        onChange={onChange}
      />
    </Flex>
  )},
  { type: 'custom', name: "tAndC", Render: ({ field, onChange }) => (
    <Flex>
      <Text> I agree to the terms and conditions </Text>
      <Checkbox
        mt={1}
        mr={2}
        name={field.name}
        isChecked={field.value}
        onChange={onChange}
      />
    </Flex>
  )}
]

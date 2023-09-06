import { NextPage } from "next";
import Layout from "../../components/layout";
import Form from "../../components/form/form";
import { Questions } from "../../components/form/questionType";
import { Heading } from "@chakra-ui/react";

const questions: Questions = [
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
  { type: 'decoration', Render: () => (<Heading mt={5} size={['md']}> Part 3: Medical Information </Heading>)},
  { type: 'text', name: 'medCond', label: 'medical condition', width: ["100%"]}, 
  { type: 'text', name: 'allergy', label: 'allergy', width: ["100%"]},
]

const MyInfo: NextPage = () => (
  <Layout>
    <Form url={"/api/user/myinfo"} questions={questions} /> 
  </Layout>
)

export default MyInfo

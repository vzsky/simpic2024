import { Schema } from "mongoose"
import { dateRegex, emailRegex, phoneRegex } from "../helper/validate"
import { FileSchema } from "./file"

// profile picture.
// upload consent form
// upload school representative

export type UserInfo = Partial<{
  submit: Date

  fname: string
  lname: string 
  nname: string
  nationality: string
  natId: string
  birthday: string
  sex: "M" | "F", 
  gender: string, 
  shirtSize: "SSS" | "SS" | "S" | "M" | "L" | "XL" | "2XL" | "3XL" | "4XL" | "5XL" | "6XL" | "7XL" | "8XL"

  email: string
  phone: string
  
  picture: {
    name: string
    encoding: string
    time: number
  }

  telegram: string
  line: string
  whatapps: string
  instagram: string 
  facebook: string

  emergencyName: string
  emergencyPhone: string

  medCond: string
  medRequire: string
  allergy: string
  
  vegan: boolean
  dietary: string
  seasick: boolean 
  carsick: boolean 

  religion: string
  relCeremony: string 
  other: string

  rAndR: boolean
  tAndC: boolean
}>

const OptString = { type: String, required: false }
const OptBoolean = { type: Boolean, required: false }

export const UserInfoSchema = new Schema<UserInfo>({
  submit: { type: Date, required: false, default: undefined },

  picture: FileSchema,

  fname: OptString, 
  lname: OptString, 
  nname: OptString, 
  nationality: OptString, 
  natId: { ...OptString }, 
  birthday: { ...OptString, match: dateRegex },
  sex: { ...OptString, enum: ['M', 'F'] },
  gender: OptString, 
  shirtSize: { ...OptString, enum: ['SSS', 'SS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL', '8XL'] },
  
  email: { ...OptString, match: emailRegex }, 
  phone: { ...OptString, match: phoneRegex }, 
  telegram: OptString, 
  line: OptString, 
  whatapps: OptString, 
  instagram: OptString, 
  facebook: OptString,

  emergencyName: OptString, 
  emergencyPhone: { ...OptString, match: phoneRegex },

  medCond: OptString, 
  medRequire: OptString,
  allergy: OptString, 

  vegan: OptBoolean,
  dietary: OptString,
  seasick: OptBoolean, 
  carsick: OptBoolean, 

  religion: OptString, 
  relCeremony: OptString, 
  other: OptString, 

  rAndR: OptBoolean,
  tAndC: OptBoolean
}, { _id : false })

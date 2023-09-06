import { Schema } from "mongoose"

export type UserInfo = {
  fname: string
  lname: string 
  nname: string
  nationality: string
  natId: string
  birthday: string
  sex: "M" | "F", 
  gender: string, 
  shirtSize: "S" | "M" | "L" | "XL" | "2XL"

  email: string
  phone: string
  telegram: string

  medCond: string
  allergy: string
}

const OptString = { type: String, required: false }

export const UserInfoSchema = new Schema<UserInfo>({
  fname: OptString, 
  lname: OptString, 
  nname: OptString, 
  nationality: OptString, 
  natId: OptString, 
  birthday: { type: String, required: false, match: /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/ },
  sex: { type: String, required: false, enum: ['M', 'F'] },
  gender: OptString, 
  shirtSize: { type: String, required: false, enum: ['S', 'M', 'L', "XL", "2XL"] },
  
  email: OptString, 
  phone: OptString, 
  telegram: OptString, 

  medCond: OptString, 
  allergy: OptString
}, { _id : false })

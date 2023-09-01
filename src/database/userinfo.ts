import { Schema } from "mongoose"

export type UserInfo = {
  fname: string
  lname: string 
  nname: string
  nationality: string
  natId: string

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

  email: OptString, 
  phone: OptString, 
  telegram: OptString, 

  medCond: OptString, 
  allergy: OptString
}, { _id : false })

import Joi from "joi"
import { UserInfo } from "../../database/userinfo"
import { dateRegex, emailRegex, phoneRegex } from "../validate"
import { Status } from "../../pages/api/user/status"

export const toBoolean = (a?: string|boolean) => {
  if (a == "T") return true
  if (a == "F") return false
  if (a) return true
  if (!a) return false
}

export const fromBoolean = (a?: boolean) => {
  if (a === undefined) return undefined
  return a ? "T" : "F"
}

const now = () => ( (new Date()).getTime() )

export const updateUserInfo = (updateValue: any): UserInfo => (
  updateValue 
    ? {
        ...updateValue,
        picture: updateValue.picture && updateValue.picture.encoding ? { ...updateValue.picture, time: now() } : undefined,
        vegan: toBoolean(updateValue.vegan),
        carsick: toBoolean(updateValue.carsick),
        seasick: toBoolean(updateValue.seasick),
        tAndC: toBoolean(updateValue.tAndC),
        rAndR: toBoolean(updateValue.rAndR),
        sex: updateValue.sex == "" ? undefined : updateValue.sex,
        shirtSize: updateValue.shirtSize == "" ? undefined : updateValue.shirtSize,
        excursion: updateValue.excursion == "" ? undefined : updateValue.excursion,
      } 
    : undefined 
)

export const getDefUserInfo = (userinfo: UserInfo) => (
  userinfo  
    ? { 
        ...userinfo,
        picture: userinfo.picture ? { name: userinfo.picture.name, time: userinfo.picture.time } : undefined,
        vegan: fromBoolean(userinfo.vegan),
        carsick: fromBoolean(userinfo.carsick),
        seasick: fromBoolean(userinfo.seasick),
      }
    : { } 
)

const m = (field: string) => ({
  'string.max': `${field} should not be that long`,
  'string.alphanum': `${field} should not contain special letters`,
  'string.email': `${field} should be a valid email`,
}) 

export const UserInfoJOIS = Joi.object({
  fname: Joi.string().max(50).allow('').messages(m('your first name')),
  lname: Joi.string().max(50).allow('').messages(m('your last name')),
  nname: Joi.string().max(50).allow('').messages(m('your nickname')), 
  nationality: Joi.string().alphanum().max(30).allow('').messages(m('nationality')),  
  natId: Joi.string().alphanum().min(5).max(20).allow('').messages(m('national or passport id')), 
  birthday: Joi.string().regex(dateRegex).allow('').messages({
    'string.pattern.base' : 'birthday should be in the format DD/MM/YYYY'
  }), 
  sex: Joi.string().valid('M', 'F').allow(''),  
  gender: Joi.string().alphanum().max(50).allow('').messages(m('your gender')),
  shirtSize: Joi.string().valid('SSS', 'SS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL', '8XL').allow(''), 

  email: Joi.string().regex(emailRegex).allow('').messages({
    'string.pattern.base': "your email must be a valid email",
  }), 
  phone: Joi.string().regex(phoneRegex).allow('').messages({
    'string.pattern.base': 'your phone number should contains country code (+XX) and numbers'
  }), 

  telegram: Joi.string().max(50).allow('').messages(m('telegram handle')),  
  line: Joi.string().max(50).allow('').messages(m('line id')),  
  whatapps: Joi.string().max(50).allow('').messages(m('whatapps handle')),  
  instragram: Joi.string().max(50).allow('').messages(m('instragram handle')),  
  facebook: Joi.string().max(50).allow('').messages(m('facebook name')),  
  
  emergencyName: Joi.string().max(50).allow('').messages(m('name')),  
  emergencyPhone: Joi.string().regex(phoneRegex).allow('').messages({
    'string.pattern.base': 'contact phone number should contains country code (+XX) and numbers'
  }),  

  medCond: Joi.string().allow(''),  
  medRequire: Joi.string().allow(''),  
  allergy: Joi.string().allow(''), 

  vegan: Joi.boolean().valid('T', 'F').allow(''),  
  // dietary: Joi.string().alphanum().allow(''),  
  seasick: Joi.string().valid('T', 'F').allow(''),  
  carsick: Joi.string().valid('T', 'F').allow(''),  

  religion: Joi.string().alphanum().max(50).allow('').messages(m('your religion name')),  
  other: Joi.string().alphanum().max(100).allow('').messages(m('detail')),  

  excursion: Joi.string().valid("0", "1", "2", "3").allow(''), 
  
}).unknown(true)

export const requiredFields = [
  "fname", "lname", "birthday", "nationality", "natId", "sex", "shirtSize", "email", 
  "emergencyName", "emergencyPhone", "medCond", "medRequire", "allergy", "vegan", "dietary", 
  "seasick", "carsick", "picture",
  "tAndC", "rAndR"
] as const // direct messages not marked but required


// TODO - picture
export const isCompleted = (userinfo?: UserInfo): Status => {
  if (!userinfo) return "not-complete"
  
  for (let field of requiredFields) {
    if (userinfo[field] === undefined) return "not-complete"
    if (userinfo[field] === '')        return "not-complete"
  }

  if (userinfo["rAndR"] != true) return "not-complete"
  if (userinfo["tAndC"] != true) return "not-complete"

  let socialMedia = ["telegram", "line", "whatapps", "facebook", "instagram"] as const 
  let haveContact: boolean = false
  for (let social of socialMedia) {
    if (userinfo[social] != undefined && userinfo[social] != '') haveContact = true
  }

  if (!haveContact) return "not-complete"

  if (userinfo.submit) return "submitted"
  return "complete"
}

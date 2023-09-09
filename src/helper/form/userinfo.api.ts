import Joi from "joi"
import { UserInfo } from "../../database/userinfo"
import { dateRegex, phoneRegex } from "../validate"

export const toBoolean = (a?: string) => {
  if (a == "T") return true
  if (a == "F") return false
}

export const fromBoolean = (a?: boolean) => {
  if (a === undefined) return undefined
  return a ? "T" : "F"
}

export const updateUserInfo = (updateValue: any): UserInfo => (
  updateValue 
    ? {
        ...updateValue,
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
        vegan: fromBoolean(userinfo.vegan),
        carsick: fromBoolean(userinfo.carsick),
        seasick: fromBoolean(userinfo.seasick),
        tAndC: fromBoolean(userinfo.tAndC),
        rAndR: fromBoolean(userinfo.rAndR),
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
  shirtSize: Joi.string().valid('S', 'M', 'L', 'XL', '2XL').allow(''), 

  email: Joi.string().email().allow('').messages(m('your email')), 
  phone: Joi.string().regex(phoneRegex).allow('').messages({
    'string.pattern.base': 'your phone number should contains only numbers'
  }), 

  telegram: Joi.string().max(50).allow('').messages(m('telegram handle')),  
  line: Joi.string().max(50).allow('').messages(m('line id')),  
  whatapps: Joi.string().max(50).allow('').messages(m('whatapps handle')),  
  instragram: Joi.string().max(50).allow('').messages(m('instragram handle')),  
  facebook: Joi.string().max(50).allow('').messages(m('facebook name')),  
  
  emergencyName: Joi.string().max(50).allow('').messages(m('name')),  
  emergencyPhone: Joi.string().regex(phoneRegex).allow('').messages({
    'string.pattern.base': 'contact phone number should contains only numbers'
  }),  

  medCond: Joi.string().allow(''),  
  medRequire: Joi.string().allow(''),  
  allergy: Joi.string().allow(''), 

  vegan: Joi.string().valid('T', 'F').allow(''),  
  dietary: Joi.string().alphanum().allow(''),  
  seasick: Joi.string().valid('T', 'F').allow(''),  
  carsick: Joi.string().valid('T', 'F').allow(''),  

  religion: Joi.string().alphanum().max(50).allow('').messages(m('your religion name')),  
  relCeremony: Joi.string().alphanum().max(100).allow('').messages(m('your ceremony detail')),  
  other: Joi.string().alphanum().max(100).allow('').messages(m('detail')),  

  excursion: Joi.string().valid("0", "1", "2", "3").allow(''), 
  
  rAndR: Joi.string().valid('T', 'F').allow(''), 
  tAndC: Joi.string().valid('T', 'F').allow(''), 

}).unknown(true)

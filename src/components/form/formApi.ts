import Joi from 'joi'
import type { NextApiRequest, NextApiResponse } from 'next'
import { REGISTRATION_CLOSED } from '../../settings'
import { isString } from '../../helper/type'
import { tryServe } from '../../helper/api'

export interface makeFormHandlerProps<Data> {
  getDefaultValue: (req: NextApiRequest) => Promise<Data>
  makeUpdate: (req: NextApiRequest) => Promise<Data|{}> 
  additionalValidation?: (req:NextApiRequest) => Promise<void>
  schema: Joi.ObjectSchema<any>
}
export const makeFormHandler = <Data>({
  getDefaultValue, 
  schema, 
  makeUpdate, 
  additionalValidation, 
}: makeFormHandlerProps<Data>) => {

  const validateData = async (document:any):Promise<Data|null> => {
    try {
      let realSchema = schema.keys({
        lastSubmit: Joi.any()
      })
      await realSchema.validateAsync(document)
      return null
    } catch (errors) {
      if (isString(errors)) throw errors
      if (!Joi.isError(errors)) throw 'unrecognized error'
      else {
        let details = errors.details.map((val:any)=>{
          if (!val.context || !val.context.key) return {}
          return { [val.context.key]: val.message }
        })
        let message = Object.assign({}, ...details) as Data
        return message
      }
    }
  }

  // the type must contain additional data, and might or might not contain data
  return tryServe(async (
    req: NextApiRequest,
    res: NextApiResponse<Data|{}>
  ) => {
    try {
      if (additionalValidation) await additionalValidation(req)
    } catch (err) {
      if (isString(err)) throw err
      throw "failed 'additional validation'"
    }

    if (req.method == "POST") {
      if(REGISTRATION_CLOSED) throw "registration closed"
      const formError = await validateData(req.body)
      if (formError) return res.status(400).json(formError)
      try {
        let document = await makeUpdate(req)
        return res.status(200).json(document)
      } catch (err) {
        return res.status(400).json({})
      }
    }
    if (req.method == "GET") {
      const defaultValue = await getDefaultValue(req)
      return res.status(200).json(defaultValue)
    }
    throw "method not accepted"
  })
}

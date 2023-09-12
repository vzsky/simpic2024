import { makeFormHandler } from "../../../components/form/formApi";
import { getUserFromRequest, queryTeam, updateTeam, updateUser } from "../../../helper/dbQuery";
import { NextApiRequest } from "next";
import Joi from "joi";
import { dateRegex } from "../../../helper/validate";
import { IObserver } from "../../../database/users.model";
import { Status } from "./status";

type Data = IObserver

const makeUpdate = async (req: NextApiRequest): Promise<Data|{}> => {
  const user = await getUserFromRequest(req)
  const updateValue = req.body

  let updator: object = { 
    $set: {
      ['observer']: updateValue
    }
  }

  let result = await updateUser(user._id, updator)
  console.log(result)

  return {}
}

const getDefaultValue = async (req: NextApiRequest) => {
  const user = (await getUserFromRequest(req) as any).toObject()
  let info = user.observer as IObserver

  if (info === undefined) return {}
  return info
}

const schema = Joi.object({
  excursion2: Joi.string().invalid(Joi.ref('excursion1')).allow('').messages({
    "any.invalid": 'excursion ranking cannot duplicate'
  }),
  excursion3: Joi.string().invalid(Joi.ref('excursion1')).invalid(Joi.ref('excursion2')).allow('').messages({
    "any.invalid": 'excursion ranking cannot duplicate'
  }),
  excursion4: Joi.string().invalid(Joi.ref('excursion1')).invalid(Joi.ref('excursion2')).invalid(Joi.ref('excursion3')).allow('').messages({
    "any.invalid": 'excursion ranking cannot duplicate'
  }),
}).unknown(true)

const requiredFields = [
  "checkin", "excursion1", "excursion2", "excursion3", "excursion4" 
] as const

export const isCompleted = (observer?: IObserver): Status => {
  if (!observer) return "not-complete"
  
  for (let field of requiredFields) {
    if (observer[field] === undefined) return "not-complete"
    if (observer[field] === '')        return "not-complete"
  }

  if (observer.submit) return "submitted"

  return "complete"
}

const handler = makeFormHandler({ schema, getDefaultValue, makeUpdate })

export default handler

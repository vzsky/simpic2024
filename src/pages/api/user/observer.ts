import { makeFormHandler } from "../../../components/form/formApi";
import { getUserFromRequest, queryTeam, updateTeam, updateUser } from "../../../helper/dbQuery";
import { NextApiRequest } from "next";
import Joi from "joi";
import { dateRegex } from "../../../helper/validate";
import { IObserver } from "../../../database/users.model";

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

const handler = makeFormHandler({ schema, getDefaultValue, makeUpdate })

export default handler
